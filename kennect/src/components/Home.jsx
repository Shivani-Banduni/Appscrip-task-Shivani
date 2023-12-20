import React from 'react';
// import { makeStyles } from '@mui/styles';
import Grow from '@mui/material/Grow';

import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import { Typography, Container } from '@mui/material';


const useStyles = (() => ({

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const blogPosts = [
  {
    title: 'Post 1',
    description: 'Description of Post 1.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Post 2',
    description: 'Description of Post 2.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  // Add more blog posts as needed
];

function BlogHomePage() {
  const classes = useStyles();

  return (
    <div>
      
      <main>
        <div className={classes.heroContent}>
        <Grow in={true} timeout={1000}>
  <Container maxWidth="sm">
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Welcome to My Blog
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      A place to explore and discover interesting articles.
    </Typography>
  </Container>
</Grow>


        </div>
        <Container maxWidth="md">
       <img src='https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg'></img>
        </Container>
      </main>
    </div>
  );
}

export default BlogHomePage;
