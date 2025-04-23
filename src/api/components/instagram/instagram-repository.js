const { Instagram } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/instagram-schema.js');

async function createDataInstagram(id, username, full_name, is_private, is_verified, followers, following) {
  return Instagram.create({
    id,
    username,
    full_name,
    is_private,
    is_verified,
    followers,
    following
  });
}

async function getInfo(username) {
  // Query to get all user information by username
  return Instagram.findOne({ username });
}

async function getBasicStat(username) {
  // Query to get follower and following count by username
  const userStats = await Instagram.findOne(
    { username },
    { followers: 1, following: 1 }
  );
  
  return userStats || { followers: 0, following: 0 };
}

async function getFollowerCount(username) {
  
  return Instagram.findOne({username});
}

module.exports = {
  createDataInstagram,
  getInfo,
  getBasicStat,
  getFollowerCount
};