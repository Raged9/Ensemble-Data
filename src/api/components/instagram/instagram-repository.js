const { instagram } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/instagram-schema.js');


async function getUserByUsername(username) {
  return instagram.findOne({ username }); 
}

async function getFollowersByUsername(username) {
  return instagram.find({ follower: username });
}

async function createinstagram(username, fullname, follower) {
  return instagram.create({ username, fullname, follower });
}

module.exports = {
  createinstagram,
  getUserByUsername, 
  getFollowersByUsername, 
};