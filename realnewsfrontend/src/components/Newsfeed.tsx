import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import {Link } from 'react-router-dom'
import {UserContext} from '../context'

interface Post {
  Title: string;
  ID: number;
  Text: string;
  Upvotes: number;
  Image: string;
}

export default function Newsfeed() {
  let [isLoading, setIsLoading] = useState(false);
  let [posts, setPosts] = useState<Post[]>([])
  const token = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:8080/posts')
    .then(function (response) {
      // handle success
      let sortedPosts = response.data.sort((a: Post, b : Post) => b.Upvotes - a.Upvotes)
      setPosts(sortedPosts)
    })
    setIsLoading(false)
  }, [])

  return (
    <div id="newsfeed">
      {
        posts.map((post: Post) => {
          const image = post?.Image ? `./${post.Image}` : "./temp-images/upload-530817856.png"
          return (
            <Grid item key={post.ID} marginRight={20} marginLeft={20} >
              <Link to={`/post/${post.ID}`}>
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
                  src={require(`${image}`)}
                />
              </Card>
            </CardActionArea>
            </Link>
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

