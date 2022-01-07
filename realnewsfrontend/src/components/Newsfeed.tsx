import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
// import FeaturedPost from './Post'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Header from './Header'

interface Post {
  Title: string,
  ID: number,
  Text: string
}

export default function Newsfeed() {
  let [isLoading, setIsLoading] = useState(false);
  let [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:8080/posts')
    .then(function (response) {
      // handle success
      setPosts(response.data)
    })
  }, [])

  return (
    <div>
      <Header/>
      {
        posts.map((post: Post) => {
          console.log(post)
          return (
            <Grid item xs={12} md={6} key={post.ID} >
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {post.Title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.Text}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                />
              </Card>
            </CardActionArea>
          </Grid>
          )
        })
      }
    </div>
  )
//set loading
//make an axios call to get all the posts
//set posts equal to state

//make a post component
//for each => create a component
}

