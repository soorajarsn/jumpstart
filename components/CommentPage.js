import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./CommentPage.css";
import PostCard from "./PostCard";
import { posts } from "./posts";
import { BackButton, ArrowDown, Times } from "./icons";
import CommentComponent from "./Comment";
import TextEditor from "./TextEditor";
import { Formik } from "formik";
const comments = [
  {
    img: "https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/DUBfKxJPSnuPM68qX_yblw-thumbnail-200x200-70.jpg",
    username: "Andrew Nguyen",
    description: "Love this so much!",
    likesCount: 0,
  },
  {
    img: "https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/CojKDI0HTzis4Dy1TWnaMQ-thumbnail-200x200-70.jpg",
    username: "Mubesh Mounange - Badimi",
    description: "Thanks for posting this!",
    likesCount: 1,
  },
];
function CommentPage(props) {
  const { postId } = props.match.params;
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [max, setMax] = useState(null);
  //get the post(api call)
  useEffect(() => {
    const filtered = posts.filter(pst => pst.id == postId);
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
  const focusEditor = event => {
    if(!event.target.classList.contains('remover'))
      document.querySelector(".comment-input-container").classList.add("focus");
  };
  const closeEditor = event => {
    document.querySelector(".comment-input-container").classList.remove("focus");
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
        {comments.map(comment => (
          <CommentComponent key={comment.description} comment={comment} />
        ))}
        <div className="comment-input-container flex align-center justify-center" onClick={focusEditor}>
          <div className="profile">
            <img src="https://images.jumpstart.me/frontend/icons/avatar.svg" alt="" />
            <span>Sooraj Shukla</span>
            <span>
              <ArrowDown />
            </span>
          </div>
          <button className="close-button link remover" onClick={closeEditor}>
            <Times />
          </button>
          <Formik
            initialValues={{
              comment: comment,
            }}
            onSubmit={data => save(data)}>
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <TextEditor name="comment" setMax={setMax} value={values.comment} raw={values.comment} setDesc={setComment} onChange={handleChange} />
                {/* <textarea name='description' onChange={handleChange} value={values.description} /> */}
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="side-container"></div>
      <Navbar />
    </div>
  );
}

export default CommentPage;
