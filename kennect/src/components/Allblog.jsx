import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Allblog = () => {
const navigate=useNavigate()

  const [data, setData] = useState([]);

  const getPosts = () => {
    axios.get('http://localhost:9000/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getPosts();
  }, []);


  const handleaddcomment=()=>{
navigate('/addcomment')
  }
  return (
    <>
      {data.map((post, index) => (
        <Card key={index} sx={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ marginBottom: '12px', fontSize: '1.5rem' }}>
              {post.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
              {post.content}
            </Typography>
            <Button  onClick={handleaddcomment} variant='contained'>Add Your Comment</Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Allblog;
