const instagramRepository = require('./instagram-repository');

async function getinfo() {
  return instagramRepository.getinfo();
}

async function getfollower() {
  return instagramRepository.getfollower();
}


// Fungsi baru untuk mendapatkan pengguna berdasarkan username
async function getUserByUsername(username) {
  return instagramRepository.getUserByUsername(username);
}

// Fungsi baru untuk mendapatkan pengikut berdasarkan username
async function getFollowersByUsername(username) {
  return instagramRepository.getFollowersByUsername(username);
}


async function createinstagram(username, fullname, follower) {
  return instagramRepository.createinstagram(username, fullname, follower);
}

module.exports = {
  getinfo,
  getfollower,
  createinstagram,
  getUserByUsername, // Tambahkan fungsi baru
  getFollowersByUsername, // Tambahkan fungsi baru
};