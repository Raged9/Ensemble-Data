const express = require('express');
const https = require('https');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Try accessing /apis/customer/get-used-units');
});

app.get('/apis/customer/get-used-units', (req, res) => {
  const root = 'https://ensembledata.com/apis';
  const endpoint = '/customer/get-used-units';
  const params = {
    "date": req.query.date || "2022-11-19",
    "token": req.query.token || "YOUR-TOKEN-HERE"
  };
  
  const queryString = new URLSearchParams(params).toString();
  const url = `${root}${endpoint}?${queryString}`;
  
  console.log(`Fetching from: ${url}`);
  
  https.get(url, (apiRes) => {
    let data = '';
    
    apiRes.on('data', (chunk) => {
      data += chunk;
    });
    
    apiRes.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData); 
        res.json(jsonData);    
      } catch (error) {
        console.error(error);  
        res.status(500).json({ error: 'Failed to parse API response' });
      }
    });
  }).on('error', (error) => {
    console.error(error);     
    res.status(500).json({ error: 'Failed to fetch data from API' });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});