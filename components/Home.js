import React, { useEffect } from "react";
import PostCard from "./PostCard";
import "./Home.css";
import Navbar from "./Navbar";
import { posts } from "./posts";
function Home() {
  //initially mount the page at the position (0,0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container flex justify-center">
      <div className="article-container">
        {posts.map(post => (
          <PostCard key={post.id} post={post} isCommentaLink />
        ))}
      </div>
      <div className="side-container"></div>
      <Navbar />
    </div>
  );
}

export default Home;
