import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import {UserContext} from '../context'
import { NumberLiteralType } from 'typescript';

interface Post {
    Text: string;
    Title: string;
    ID: number;
    Upvotes: number;
    Image: string;
}

export default function SelectedPost() {
  const { ID } = useParams();

  let [isLoading, setIsLoading] = useState(false);
  let [post, setPost] = useState<Post>()

    useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:8080/post/${ID}`)
    .then(function (response) {
      // handle success
      setPost(response.data)
    })
    setIsLoading(false)
  }, [])

  async function upvotePost() {
    let { data } = await axios.put(`http://localhost:8080/post/${ID}`)
    setPost(data)
  }

  const image = post?.Image ? `./${post.Image}` : "./public/upload-854775037.png"

  if(isLoading) {
    return <div/>
  } else {
    console.log(post)
    console.log("IMAGE", image)
  return (
    <div>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: post?.Image
          }}
        >
          {/* Increase the priority of the hero background image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          <Grid container justifyContent={'center'}>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <img src={require(`${image}`)} />
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  {post?.Title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {post?.Text}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Upvotes:{post?.Upvotes}
                </Typography>
                <Button variant="contained" onClick={upvotePost}>Upvote</Button>
                {/* <Link variant="subtitle1" href="#">
                  {post.linkText}
                </Link> */}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
      );
              }
}

