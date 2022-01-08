import React from "react";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./components/Newsfeed";
import SelectedPost from "./components/Post";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/post/:postId" element={SelectedPost}/>
      <Route path="/posts" element={Newsfeed()} />
    </Routes>
  )
}

