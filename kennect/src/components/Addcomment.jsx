import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
  } from '@mui/material';

const Addcomment = () => {
const [comment,setcomment]=React.useState('')

const handlecomment=()=>{
console.log(comment,'comment')
}

    return (
    <Container maxWidth='lg' >
        <Typography>
            <Box>
                <TextField   onChange={(e)=>setcomment(e.target.value)}
                style={{overflow:'scroll'}}
                value={comment}
                style={{  marginTop: '30px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                 fullWidth
                label="Your Post"
          variant="outlined"
          multiline
          rows={23.3}
          required> 
                </TextField>
            </Box>
        </Typography>
        <Button  onClick={handlecomment} variant='contained'>Comment</Button>
    </Container>
    );
}

export default Addcomment;
