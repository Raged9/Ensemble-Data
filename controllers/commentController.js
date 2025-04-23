// controllers/commentController.js
const Comment = require('ensamble-api/models/Comment');

exports.getComments = async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
};

exports.getCommentsByPostId = async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
};

exports.createComment = async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.status(201).json(newComment);
};
