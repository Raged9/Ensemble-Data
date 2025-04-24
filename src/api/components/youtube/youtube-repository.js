const { Youtube } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/youtube-schema.js');

async function getChannelSubscribers(channelId) {
  try {
    const result = await Youtube.findOne({ channelId: channelId }).exec();
    console.log(`Data subscriber untuk channel ${channelId}:`, result);
    return result;
  } catch (error) {
    console.error('Error in getChannelSubscribers:', error);
    throw error;
  }
}

async function getChannelIdFromUsername(username) {
  try {
    const result = await Youtube.findOne({ username: username }).exec();
    console.log(`Data channel untuk username ${username}:`, result);
    return result;
  } catch (error) {
    console.error('Error in getChannelIdFromUsername:', error);
    throw error;
  }
}

async function getUsernameFromChannelId(channelId) {
  try {
    const result = await Youtube.findOne({ channelId: channelId }).exec();
    console.log(`Data channel untuk channel ID ${channelId}:`, result);
    return result;
  } catch (error) {
    console.error('Error in getUsernameFromChannelId:', error);
    throw error;
  }
}

async function saveChannelSubscribers(channelId, subscriberCount, username) {
  try {
 
    await Youtube.updateOne(
      { channelId: channelId },
      { subscriberCount: subscriberCount, username: username },
      { upsert: true } 
    );
    console.log(`Data subscriber untuk channel ${channelId} berhasil disimpan/diperbarui.`);
  } catch (error) {
    console.error('Error in saveChannelSubscribers:', error);
    throw error; 
  }
}

module.exports = {
  getChannelSubscribers,
  getChannelIdFromUsername,
  getUsernameFromChannelId,
  saveChannelSubscribers,
};