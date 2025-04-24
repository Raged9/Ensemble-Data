const twitchRepository = require('./twitch-repository');

async function getFollowers() {
  return twitchRepository.getFollowers();
}

async function getVideos() {
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

  if (!data.data || !data.videos) {
    throw new Error('Both data and videos fields are required');
  }
  
  return twitchRepository.create({
    data: data.data,
    videos: data.videos,
    count: data.count || "0"
  });
}

module.exports = {
  getFollowers,
  getVideos,
  createFollowers,
  search,
};