const { instagram } = require('/Users/ASUS/backendutsss/Ensemble-Data/src/models/instagram-schema.js');

async function getinfo() {
  return instagram.find({});
}
async function getfollower() {
  return instagram.find({});
}

// Fungsi baru untuk mendapatkan pengguna berdasarkan username
async function getUserByUsername(username) {
  return instagram.findOne({ username: username }); // Sesuaikan dengan skema Anda
}

// Fungsi baru untuk mendapatkan pengikut berdasarkan username
async function getFollowersByUsername(username) {
  // Sesuaikan kueri ini dengan skema database Anda.  Contoh:
  return instagram.find({ follower: username }); // Cari pengikut berdasarkan username
}

async function createinstagram(username, fullname, follower) {
  return instagram.createinstagram({ username, fullname, follower });
}

module.exports = {
  getinfo,
  getfollower,
  createinstagram,
  getUserByUsername, // Tambahkan fungsi baru
  getFollowersByUsername, // Tambahkan fungsi baru
};