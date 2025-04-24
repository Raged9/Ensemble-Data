const instagramRepository = require('./instagram-repository');

async function getUserByUsername(username) {
  return instagramRepository.getUserByUsername(username);
}

async function getFollowersByUsername(username) {
  return instagramRepository.getFollowersByUsername(username);
}


async function createinstagram(username, fullname, follower) {
  return instagramRepository.createinstagram(username, fullname, follower);
}

module.exports = {
  createinstagram,
  getUserByUsername, 
  getFollowersByUsername, 
};