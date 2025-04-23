const Video = require('ensamble-api/models/Video');

exports.getVideos = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

exports.getVideoById = async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.json(video);
};

exports.createVideo = async (req, res) => {
  const newVideo = new Video(req.body);
  await newVideo.save();
  res.status(201).json(newVideo);
};

exports.deleteVideo = async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: 'Video deleted' });
};
