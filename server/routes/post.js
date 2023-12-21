const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const cors = require('cors');
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  };
  
  app.use(cors(corsOptions));
  


// Create a new post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log(title, content); // Fixed the console.log statement
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
