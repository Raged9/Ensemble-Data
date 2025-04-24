const instagramService = require('./instagram-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getinfo(request, response, next) {
  try {
    const { username } = request.params; 
    const user = await instagramService.getUserByUsername(username); 

    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Pengguna tidak ditemukan');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function getfollower(request, response, next) {
  try {
    const { username } = request.params;  
    const followers = await instagramService.getFollowersByUsername(username); 

    return response.status(200).json(followers);
  } catch (error) {
    return next(error);
  }
}

async function createinstagram(request, response, next) {
  try {
    const { username, fullname, follower } = request.body;

    const instagram = await instagramService.createinstagram(username, fullname, follower);

    return response.status(200).json(instagram);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getinfo,
  getfollower,
  createinstagram,
};
