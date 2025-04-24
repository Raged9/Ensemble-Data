const twitchService = require('./twitch-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getFollowers(request, response, next) {
  try {
    const followers = await twitchService.getFollowers();
    
    const formattedFollowers = followers.map(item => ({
      _id: item._id,
      data: item.data,
      __v: item.__v
    }));
    
    return response.status(200).json(formattedFollowers);
  } catch (error) {
    console.error(`Error saat mengambil data: ${error.message}`);
    return next(error);
  }
}

async function getVideos(request, response, next) {
  try {
    const videos = await twitchService.getVideos();
    
    const formattedVideos = {
      data: {
        videos: videos,
        count: videos.length
      }
    };
    
    return response.status(200).json(formattedVideos);
  } catch (error) {
    console.error(`Error saat mengambil videos: ${error.message}`);
    return next(error);
  }
}

async function search(request, response, next) {
  try {
    const { keyword } = request.query;
    
    if (!keyword) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Keyword is required for search'
      );
    }
    
    const searchResults = await twitchService.search(keyword);
    
    return response.status(200).json(searchResults);
  } catch (error) {
    console.error(`Error saat mencari data: ${error.message}`);
    return next(error);
  }
}

async function createFollowers(request, response, next) {
  try {
    const { data, videos, count } = request.body;

    if (!data || !videos) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Both data and videos fields are required'
      );
    }

    const newData = await twitchService.createFollowers({
      data,
      videos,
      count
    });

    if (!newData) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create data'
      );
    }

    return response.status(200).json({ 
      message: 'Data created successfully',
      data: newData 
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFollowers,
  getVideos,
  createFollowers,
  search,
};