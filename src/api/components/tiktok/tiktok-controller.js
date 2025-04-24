const tiktokService = require('./tiktok-service');

exports.getFollowers = async (req, res) => {
  try {
    const { username, ...rest } = req.query;
    const response = await tiktokService.getFollowers(username, rest);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFollowings = async (req, res) => {
  try {
    const { username, ...rest } = req.query;
    const response = await tiktokService.getFollowings(username, rest);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTiktokData = async (req, res) => {
  try {
    const { username, follower, following } = req.body;
    const response = await tiktokService.createTiktokData({ username, follower, following });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};