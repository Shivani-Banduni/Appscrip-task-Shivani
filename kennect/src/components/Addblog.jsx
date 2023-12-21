import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Addblog = () => {
  const [title, settitle] = useState('');
  const [post, setPost] = useState('');
  const navigate=useNavigate()

  const handlePost = async () => {
    const obj = {
      title: title,
      content: post
    };
    const body = JSON.stringify(obj)

    try {
      console.log(obj)
      const res = await axios.post('http://localhost:9000/posts', obj, {
      });
      console.log(res.data, 'post');
      // Handle success message or redirect if needed
    } catch (error) {
      console.error('Error while posting:', error);
      // Handle error state or log the specific error received
    }

    alert()
    navigate('/allblog')
alert('Your data has been saved successfully')
  };

  return (
    <Container maxWidth='xlg' style={{ height: '70vh', marginTop: '30px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
      <Typography variant="h5">Name</Typography>
      <TextField
        required
        label="Enter your Name"
        variant="outlined"
        value={title} // Bind value to 'name' state
        onChange={(e) => settitle(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <Typography variant="h5" gutterBottom>
        Add Your Post
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          fullWidth
          multiline
          rows={13}
          required
          label="Your Post"
          variant="outlined"
          value={post} // Bind value to 'post' state
          onChange={(e) => setPost(e.target.value)}
          style={{ height: '40vh', marginBottom: '20px' }}
        />

        <Button
          onClick={handlePost} // Call handlePost on button click
          disabled={title === '' || post === ''}
          variant='contained'
        >
          Post
        </Button>
      </Box>
      <hr />
    </Container>
  );
};

export default Addblog;
