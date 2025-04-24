const youtubeService = require('./youtube-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getChannelSubscriberCount(request, response, next) {
  try {
    const { channelId } = request.query;
    if (!channelId) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Parameter channelId harus disertakan dalam query.'
      );
    }

    const subscriberCount = await youtubeService.getChannelSubscriberCount(channelId);
    return response.status(200).json({ channelId, subscriberCount });
  } catch (error) {
    return next(error);
  }
}

async function getChannelUsernameToId(request, response, next) {
  try {
    const { username } = request.query;
    if (!username) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Parameter username harus disertakan dalam query.'
      );
    }

    const channelId = await youtubeService.getChannelUsernameToId(username);
    return response.status(200).json({ username, channelId });
  } catch (error) {
    return next(error);
  }
}

async function getChannelIdToUsername(request, response, next) {
  try {
    const { channelId } = request.query;
    if (!channelId) {
      throw errorResponder(
        errorTypes.BAD_REQUEST,
        'Parameter channelId harus disertakan dalam query.'
      );
    }

    const username = await youtubeService.getChannelIdToUsername(channelId);
    return response.status(200).json({ channelId, username });
  } catch (error) {
    return next(error);
  }
}

async function createChannelData(request, response, next) {
  try {
    const { channelId, subscriberCount, username } = request.body;

    if (!channelId) {
      throw errorResponder(errorTypes.BAD_REQUEST, 'channelId harus diberikan.');
    }
    if (subscriberCount === undefined) {
      throw errorResponder(errorTypes.BAD_REQUEST, 'subscriberCount harus diberikan.');
    }
    if (!username) {
      throw errorResponder(errorTypes.BAD_REQUEST, 'username harus diberikan.');
    }

    await youtubeService.updateChannelSubscribers(channelId, subscriberCount, username);

    return response.status(201).json({ message: 'Data channel berhasil dibuat.' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getChannelSubscriberCount,
  getChannelUsernameToId,
  getChannelIdToUsername,
  createChannelData,
};