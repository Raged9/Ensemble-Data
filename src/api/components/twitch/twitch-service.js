const twitchRepository = require('./twitch-repository');

async function getFollowers() {
  return twitchRepository.getFollowers();
}

async function search(keyword) {
  const results = await twitchRepository.search(keyword);
  
  return {
    data: {
      videos: results,
      count: results.length
    }
  };
}

async function createFollowers(data) {
  if (!data.username) {
    throw new Error('Username is required');
  }

  if (!data.data) {
    throw new Error('Data field is required');
  }
  

  return twitchRepository.create({
    username: data.username,
    data: data.data,
    videos: data.videos || "",
    count: data.count || "0"
  });
}

module.exports = {
  getFollowers,
  search,
  createFollowers,
};