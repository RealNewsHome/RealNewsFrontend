import React from "react";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./components/Newsfeed";
import SelectedPost from "./components/Post";
import UserProfile from "./components/UserProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PropTypes from 'prop-types';


const RouteList: React.FC<{setToken:Object, setUserId:Object, setUsername:Object}> = ({ setToken, setUserId, setUsername } : any) => {
  return (
    <Routes>
      <Route path="/post/:ID" element={< SelectedPost />} />
      <Route path="/" element={<Newsfeed />} />
      <Route path="/posts" element={<Newsfeed />} />
      <Route path="/posts/byUser/:ID" element={<UserProfile />} />
      <Route path="/signIn" element={<SignIn setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>} />
      <Route path="/signUp" element={<SignUp setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>} />
    </Routes>
  )
}

RouteList.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default RouteList

