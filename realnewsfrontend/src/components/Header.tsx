import React, { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {UserContext} from '../context';
import axios from 'axios';
import { logout } from './SignIn'


const Header: React.FC<{setToken:Object, setUserId:Object, setUsername:Object}> = ({ setToken, setUserId, setUsername } : any) => {
  const token = window.localStorage.getItem('token');
  const userInfo = useContext(UserContext)
  let userId;

  if(userInfo.userId) {
    userId = userInfo.userId;
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Link to={`/posts`}>
        <Button size="small">Home</Button>
      </Link>
      <Link to={`/posts/byUser/${userId}`}>
        <Button size="small">My Profile</Button>
      </Link>
      <Link to={`/newPost`}>
        <Button size="small">New Post</Button>
      </Link>
        <Typography
          component="h2"
          variant="h5"
          color="black"
          align="center"
          fontWeight={"bold"}
          fontFamily={"American Typewriter"}
          noWrap
          sx={{ flex: 1 }}
        >
          Real News
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={() => logout()}>
          Logout
        </Button>
        <Link to="/signUp">
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        </Link>
        <Link to="/signIn">
        <Button variant="outlined" size="small">
          Sign in
        </Button>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Header
