const instagramRepository = require('./instagram-repository');

async function getFollowerCount(username) {
  return instagramRepository.getFollowerCount(username);
}

async function getBasicStat(username) {
  return instagramRepository.getBasicStat(username);
}

async function getInfo(username) {
  return instagramRepository.getInfo(username);
}

async function getInfo(id ,
  username ,
  full_name ,
  is_private ,
  is_verified ,
  followers ,
  following) {
  return instagramRepository.getUsedUnits(id ,
    username ,
    full_name ,
    is_private ,
    is_verified ,
    followers ,
    following);
}

async function createDataInstagram(id ,
  username ,
  full_name ,
  is_private ,
  is_verified ,
  followers ,
  following){
  return instagramRepository.createDataInstagram(
    id ,
    username ,
    full_name ,
    is_private ,
    is_verified ,
    followers ,
    following);
}

module.exports = {
  createDataInstagram,
  getInfo,
  getBasicStat,
  getFollowerCount
};
