import React, {useState, useContext, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import { UserContext } from "../context";
// import { useForm } from "react-hook-form";
// import FileInput from "./FileInput";

const NewPostForm = () => {
  const token = window.localStorage.getItem('token');
  // const { register } = useForm()
  const [draft, setDraft] = useState("")
  const [imageUrl, setImageUrl] = useState<File | string>()
  const [selectedImage, setSelectedImage] = useState<File | null>()
  const [location, setLocation] = useState <number[]>()

  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLocation([lat, lon]);
    });
  } else {
    console.log('geolocation not available');
    alert('You must share location to post')
  }


  const userInfo = useContext(UserContext)
  let userId: Number;

  if(!token) {
    return (
      <h1>Please Sign Up or Sign In to Post</h1>
    )
  }

  if(userInfo.userId) {
    userId = userInfo.userId;
  }


  async function newPostThunk(title: FormDataEntryValue | null, text: FormDataEntryValue | null, userId: Number | null) {
    let res = await axios.post('http://localhost:8080/post', {
      title,
      text,
      userId
    })
  }

  const fileChangedHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    let eventFiles = (e?.target as HTMLInputElement)?.files?.[0];
    setSelectedImage(eventFiles)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let text = data.get('text');
    let title = data.get('title')
    newPostThunk(title, text, userId)
  };

  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

        <Grid item xs={12} sm={80} md={50} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title:"
                name="title"
                autoComplete="title"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Enter your post here:"
                name="text"
                autoComplete="text"
                autoFocus
                multiline={true}
              />
               <>
  <input
    accept="image/*"
    type="file"
    id="select-image"
    style={{ display: 'none' }}
    onChange={e => fileChangedHandler(e)}
  />
  <label htmlFor="select-image">
    <Button variant="contained" color="primary" component="span">
      Upload Image
    </Button>
  </label>
</>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Post
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default NewPostForm

