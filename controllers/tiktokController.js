const axios = require('axios');
const API_BASE = 'https://ensembledata.com/apis';
const TOKEN = process.env.ENSEMBLE_TOKEN; // dari .env

exports.getUserInfo = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${API_BASE}/tt/user/info`, {
      params: { username, token: TOKEN }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data user TikTok' });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${API_BASE}/tt/user/posts`, {
      params: { username, depth: 1, start_cursor: 0, token: TOKEN }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil postingan user TikTok' });
  }
};

exports.getPostInfo = async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(`${API_BASE}/tt/post/info`, {
      params: { url, token: TOKEN }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil info postingan TikTok' });
  }
};

exports.getPostComments = async (req, res) => {
  try {
    const { aweme_id } = req.params;
    const response = await axios.get(`${API_BASE}/tt/post/comments`, {
      params: { aweme_id, cursor: 0, token: TOKEN }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil komentar TikTok' });
  }
};

exports.getHashtagPosts = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${API_BASE}/tt/hashtag/posts`, {
      params: { name, cursor: 0, token: TOKEN }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil postingan hashtag TikTok' });
  }
};
