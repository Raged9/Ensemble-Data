const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const config = require('./core/config');
const logger = require('./core/logger')('app');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./api/routes.js'); // Adjust path as needed
app.use('/', routes());

const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;

db.on("error", (err) => {
  logger.fatal(err, 'MongoDB connection error');
  process.exit(1);
});

db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

app.listen(PORT, ()=>{
  logger.info(`App listening on port ${PORT}`);
})

const dbExports = {};
dbExports.db = db;

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const model = require(path.join(__dirname, file))(mongoose);
    dbExports[model.modelName] = model;
  });

module.exports = dbExports;