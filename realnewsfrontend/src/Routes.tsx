import React from "react";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./components/Newsfeed";
import SelectedPost from "./components/Post";
import UserProfile from "./components/UserProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


export default function RouteList() {
  return (
    <Routes>
      <Route path="/post/:ID" element={< SelectedPost />} />
      <Route path="/posts" element={<Newsfeed />} />
      <Route path="/posts/byUser/:ID" element={<UserProfile />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  )
}

