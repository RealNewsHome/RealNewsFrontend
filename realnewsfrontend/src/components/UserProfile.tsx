import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Header from './Header';
import { Link } from 'react-router-dom';
import SelectedPost from './Post';

interface Post {
  Text: string;
  Title: string;
  ID: number;
}

interface User {
  Username: string;
	Email:    string;
	Password: string;
	Posts:    Post[]
}

export default function UserProfile() {
  const { ID } = useParams()

  let [isLoading, setIsLoading] = useState(false);
  let [user, setUser] = useState<User>()
  let [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:8080/posts/byUser/${ID}`)
    .then(function (response) {
      setPosts(response.data)
    })
    setIsLoading(false)
  }, [posts])

  useEffect(() => {
    setIsLoading(true)
      axios.get(`http://localhost:8080/users/${ID}`)
      .then(function (response) {
        setUser(response.data)
      })
      setIsLoading(false)
  }, [ID])

  if(isLoading) {
    return (
      <></>
    )
  }

  return (
    <>
    <h1>Welcome to {user?.Username}'s Profile!</h1>
    <h3>Here are their posts:</h3>
    {
        posts.map((post: Post) => {
          return (
            <Grid item xs={12} md={6} key={post.ID} >
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
                />
              </Card>
            </CardActionArea>
            </Link>
          </Grid>
          )
        })
      }
    </>
  )
}

//we want this to show a users's username, and all of their posts
//get the user's id
//pass it in to get all posts associated w that id user
