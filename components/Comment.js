import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Comment.css";
import PostCard from "./PostCard";
import { posts } from "./posts";
import { BackButton } from "./icons";
function Comment(props) {
  const { postId } = props.match.params;
  const [post, setPost] = useState({});
  //get the post(api call)
  useEffect(() => {
    const filtered = posts.filter(pst => pst.id == postId);
    console.log(filtered);
    setPost(filtered[0]);
  }, []);
  //when this page is opened, initial page is scrolled to point (0,0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //goes back;
  const pushBack = () => {
    props.history.goBack();
  };
  return (
    <div className="main-container comment-page flex justify-center">
      <div className="article-container flex align-center flex-column">
        <div className="back-button-container flex align-center justify-center">
          <button className="flex align-center link" onClick={pushBack}>
            <BackButton />
            Back
          </button>
        </div>
        {post.id && <PostCard post={post} />}
        <hr />
        <div className="comment-input-container flex align-center justify-center">
          <input className="flex align-center" placeholder="Leave a comment" />
        </div>
      </div>
      <div className="side-container"></div>
      <Navbar />
    </div>
  );
}

export default Comment;
