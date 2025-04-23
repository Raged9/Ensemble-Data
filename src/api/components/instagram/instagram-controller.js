const instagramService = require('./instagram-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { createDataUnits } = require('../customer/instagram-repository');
const { get } = require('mongoose');

async function createDataInstagram(request, response, next) {
  try {
    const {
      id ,
      username ,
      full_name ,
      is_private ,
      is_verified ,
      followers ,
      following ,
    } = request.body;

    // Create the data
    const success = await instagramService.createDataInstagram(
      id ,
      username ,
      full_name ,
      is_private ,
      is_verified ,
      followers ,
      following ,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create data'
      );
    }

    return response.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getInfo(request, response, next) {
  try {
    // Get username from query params
    const { username } = request.params;
    
    if (!username) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Username parameter is required'
      );
    }
    
    // Log for debugging
    console.log(`Fetching info for username: ${username}`);
    
    const info = await instagramService.getInfo(username);
    
    if (!info) {
      throw errorResponder(
        errorTypes.NOT_FOUND,
        `User with username ${username} not found`
      );
    }

    return response.status(200).json(info);
  } catch (error) {
    return next(error);
  }
}

async function getBasicStat(request, response, next) {
  try {
    // Get username from query params
    const { username } = request.params;
    
    if (!username) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Username parameter is required'
      );
    }
    
    // Log for debugging
    console.log(`Fetching basic stats for username: ${username}`);
    
    const stat = await instagramService.getBasicStat(username);

    return response.status(200).json(stat);
  } catch (error) {
    return next(error);
  }
}

async function getFollowerCount(request, response, next) {
  try {
    // Get username from query params
    const { username } = request.params;
    
    if (!username) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Username parameter is required'
      );
    }
    
    // Log for debugging
    console.log(`Fetching follower count for username: ${username}`);
    
    const count = await instagramService.getFollowerCount(username);

    return response.status(200).json({ followers: count });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  createDataInstagram,
  getInfo,
  getBasicStat,
  getFollowerCount
};
