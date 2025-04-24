const instagramService = require('./instagram-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Fungsi untuk mendapatkan informasi pengguna berdasarkan username
async function getinfo(request, response, next) {
  try {
    const { username } = request.params; // Mengambil username dari parameter rute
    const user = await instagramService.getUserByUsername(username); // Memanggil fungsi service yang sesuai

    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Pengguna tidak ditemukan');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

// Fungsi untuk mendapatkan pengikut pengguna berdasarkan username
async function getfollower(request, response, next) {
  try {
    const { username } = request.params;  // Mengambil username dari parameter rute.
    const followers = await instagramService.getFollowersByUsername(username); // Memanggil fungsi service

    return response.status(200).json(followers);
  } catch (error) {
    return next(error);
  }
}

async function createinstagram(request, response, next) {
  try {
    const { username, fullname, follower } = request.body;

    const instagram = await instagramService.create(username, fullname, follower);

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
