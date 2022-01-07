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

interface Post {
  Title: string,
  ID: number
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
      <h1>Welcome to my newsfeed</h1>
      {
        posts.map((post: Post) => {
          console.log(post)
          return (
            <p key={post.ID}>{post.Title}</p>
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

