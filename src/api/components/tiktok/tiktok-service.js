const tiktokRepo = require('./tiktok-repository');
const TiktokData = require('./tiktok-model');

exports.getFollowers = async (username, extraParams = {}) => {
  return await tiktokRepo.fetchFollowers(username, extraParams);
};

exports.getFollowings = async (username, extraParams = {}) => {
  return await tiktokRepo.fetchFollowings(username, extraParams);
};

exports.createTiktokData = async (data) => {
  const newData = new TiktokData(data);
  return await newData.save();
};
