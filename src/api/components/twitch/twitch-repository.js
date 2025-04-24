const { twitch } = require('../../../models/twitch-schema.js');

async function getFollowers() {
  return twitch.find({});
}

async function search(keyword) {
  const allData = await twitch.find({});
  
  const results = allData.filter(item => {
    const videosLowerCase = (item.videos || '').toLowerCase();
    const dataLowerCase = (item.data || '').toLowerCase();
    const usernameLowerCase = (item.username || '').toLowerCase();
    const keywordLowerCase = keyword.toLowerCase();
    
    return videosLowerCase.includes(keywordLowerCase) || 
           dataLowerCase.includes(keywordLowerCase) ||
           usernameLowerCase.includes(keywordLowerCase);
  });
  
  return results;
}

async function create(data) {
  return twitch.create(data);
}

module.exports = {
  getFollowers,
  create,
  search,
};