// controllers/postController.js
const Post = require('ensamble-api/models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('userId');
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('userId');
  res.json(post);
};

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
};

exports.updatePost = async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
