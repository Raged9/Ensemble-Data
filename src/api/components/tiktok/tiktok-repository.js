const TiktokData = require('./tiktok-model');

exports.fetchFollowers = async (username, extraParams = {}) => {
  return await TiktokData.find({ username }, { follower: 1, _id: 0 });
};

exports.fetchFollowings = async (username, extraParams = {}) => {
  return await TiktokData.find({ username }, { following: 1, _id: 0 });
};

exports.createTiktokData = async (data) => {
  const newData = new TiktokData(data);
  return await newData.save();
};