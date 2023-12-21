const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const { text, postId } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = await Comment.create({ text, post: postId });
    post.comments.push(newComment);
    await post.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
