const twitchService = require('./twitch-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getFollowers(request, response, next) {
  try {
    const followers = await twitchService.getFollowers();
    
    const formattedFollowers = followers.map(item => ({
      username: item.username,
      data: item.data
    }));
    
    return response.status(200).json(formattedFollowers);
  } catch (error) {
    console.error(`Error saat mengambil data: ${error.message}`);
    return next(error);
  }
}

async function search(request, response, next) {
  try {
    const { keyword } = request.query;
    
    const searchResults = await twitchService.search(keyword);
    
    const formattedResults = {
      data: {
        videos: searchResults.data.videos.map(item => ({
          _id: item._id,
          data: item.data,
          videos: item.videos,
          count: item.count
        })),
        count: searchResults.data.count
      }
    };
    
    return response.status(200).json(formattedResults);
  } catch (error) {
    console.error(`Error saat mencari data: ${error.message}`);
    return next(error);
  }
}

async function createFollowers(request, response, next) {
  try {
    const { username, data, videos, count } = request.body;

    if (!username) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Username is required'
      );
    }

    if (!data) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Data field is required'
      );
    }

    const newData = await twitchService.createFollowers({
      username,
      data,
      videos: videos || "", 
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
  search,
  createFollowers,
};