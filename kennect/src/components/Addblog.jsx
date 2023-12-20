import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  TextareaAutosize,
  Container,
} from '@mui/material';

const Addblog = () => {
  const [name, setName] = useState('');
  const [post, setpost] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    setShowCommentBox(true);
  };

  const handleSubmitComment = () => {
    // Perform submit action (e.g., send comment to backend)
    console.log('Submitted Comment:', comment);
    // Reset fields
    setComment('');
    setShowCommentBox(false);
  };

  return (
    <>
    <Container maxWidth='sm' style={{ marginTop: '30px' ,boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
    
    
    }}>
    <Typography variant="h5">Add Your Name</Typography>
    <TextField required
        label="Enter your name"
        variant="outlined"
        
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Typography variant="h5" gutterBottom>
        Add Your Post
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField 
        required
          label="Your Post"
          variant="outlined"
          value={post}
          onChange={(e) => setpost(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button
           disabled={name==='' &&  post===''}

          variant="contained"
          color="primary"
          onClick={handleAddComment}
          style={{ marginBottom: '20px' }}
        >
          Add Your Comment
        </Button>
        {showCommentBox && (
          <Box width="100%">
            <TextareaAutosize
              placeholder="Type your comment here..."
              minRows={3}
              maxRows={6}
              // value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: '90%',
                marginBottom: '20px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical',
              }}
            />
            <Button 
              variant="contained"
              color="primary"
              onClick={handleSubmitComment}
            >
              Submit
            </Button>
            <br/>
          </Box>
        )}
      </Box>
      <hr/>
    </Container>
    </>
  );
};

export default Addblog;
