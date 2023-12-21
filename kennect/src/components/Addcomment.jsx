import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
  } from '@mui/material';
import axios from 'axios';

const Addcomment = ({id}) => {
const [comment,setcomment]=React.useState('');
const [flag ,setFlag] = React.useState(true);

const handlecomment=()=>{
console.log(comment,'comment')
const postcomment={
    postId:id,
    text:comment
}


axios.post('http://localhost:9000/comments',postcomment)

setFlag(false)
window.location.reload()
}

    return (
        flag?
    <Container maxWidth='lg' >
        <Typography>
            <Box>
                <TextField   onChange={(e)=>setcomment(e.target.value)}
                value={comment}
                className='comment'
                 
                label="Your comment"
          variant="outlined"
          multiline
          rows={7}
          required> 
                </TextField>
            </Box>
        </Typography><br/>
        <Button  onClick={handlecomment} variant='contained'>Comment</Button>
    </Container>
    :""
    );
}

export default Addcomment;
