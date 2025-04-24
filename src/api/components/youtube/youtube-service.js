const youtubeRepository = require('./youtube-repository');

async function getChannelSubscriberCount(channelId) {
  try {
    const result = await youtubeRepository.getChannelSubscribers(channelId);
    return result ? result.subscriberCount : null;
  } catch (error) {
    console.error('Error in getChannelSubscriberCount:', error);
    throw error;
  }
}

async function getChannelUsernameToId(username) {
  try {
    const result = await youtubeRepository.getChannelIdFromUsername(username);
    return result ? result.channelId : null;
  } catch (error) {
    console.error('Error in getChannelUsernameToId:', error);
    throw error;
  }
}

async function getChannelIdToUsername(channelId) {
  try {
    const result = await youtubeRepository.getUsernameFromChannelId(channelId);
    return result ? result.username : null;
  } catch (error) {
    console.error('Error in getChannelIdToUsername:', error);
    throw error;
  }
}

async function updateChannelSubscribers(channelId, subscriberCount, username) {
  try {
    if (!channelId) {
      throw new Error('channelId harus diberikan.');
    }
    if (subscriberCount === undefined || subscriberCount === null) {
      throw new Error('subscriberCount harus diberikan.');
    }
    if (!username) {
      throw new Error('username harus diberikan.');
    }

    await youtubeRepository.saveChannelSubscribers(channelId, subscriberCount, username);
  } catch (error) {
    console.error('Error in updateChannelSubscribers:', error);
    throw error;
  }
}

async function getChannelData(channelId) {
  try {
    const result = await youtubeRepository.getChannelSubscribers(channelId);
    return result;
  } catch (error) {
    console.error('Error in getChannelData', error);
    throw error;
  }
}

module.exports = {
  getChannelSubscriberCount,
  getChannelUsernameToId,
  getChannelIdToUsername,
  updateChannelSubscribers, 
  getChannelData, 
};
