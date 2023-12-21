import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Addcomment from './Addcomment';




const Allblog = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [data, setData] = useState([]);
    const [name,setname] = useState('')
const [id,setid]=useState('')
const[addcomment,setAddComment]=useState({})
const navigate=useNavigate()


  const getPosts = () => {
    axios.get('http://localhost:9000/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getPosts();
  },[]);


  const handleaddcomment=(post)=>{
    console.log(post._id,"post")
    let iD = post._id
    setid(post._id)
      console.log(user,'user')
      const obj = {

      }
      obj[iD]=1
      setAddComment({...addcomment,...obj})
      console.log(addcomment)
// navigate('/addcomment')
  }


  const handlename=()=>{
      console.log(name,'name')
     const filteredata =  data.filter((e)=> e?.title?.toLowerCase() === name)

     setData(filteredata)
  }


  
  return (
    <>
<div className='main'>
<input
      type="text"
      placeholder='Search By Name'
      onChange={(e)=>setname(e.target.value)}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '250px',
        marginTop:'2%',
        marginBottom:'3%'
      }}
    />
    <Button onClick={handlename} variant='contained'>Search</Button>
</div>

      {data.map((post, index) => (
        <Card key={index} sx={{ marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ marginBottom: '12px', fontSize: '1.5rem' }}>
              {post.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>
              {post.content}
            </Typography><br/><br/>
            <div><b style={{color:'green'}}>Comments : </b> {post.comments?.length}</div><br/>
            <Button  onClick={()=>handleaddcomment(post)} variant='contained'>Add Your Comment</Button>
          </CardContent>
          {addcomment[post._id] ? <Addcomment id={post._id}/>:<div></div>}
        </Card>
      ))}

 
    </>
    
  );
};

export default Allblog;
