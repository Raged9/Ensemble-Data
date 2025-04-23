// controllers/hashtagController.js
const Hashtag = require('ensamble-api/models/Hashtag');

exports.getHashtags = async (req, res) => {
  const tags = await Hashtag.find();
  res.json(tags);
};

exports.createHashtag = async (req, res) => {
  const newTag = new Hashtag(req.body);
  await newTag.save();
  res.status(201).json(newTag);
};

exports.incrementHashtagUsage = async (req, res) => {
  const tag = await Hashtag.findOneAndUpdate(
    { name: req.params.name },
    { $inc: { usageCount: 1 } },
    { new: true }
  );
  res.json(tag);
};
