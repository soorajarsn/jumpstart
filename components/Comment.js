import React from "react";
import "./Comment.css";
import { Heart, Comment } from "./icons";
function CommentComponent(props) {
  const createMarkup = html => ({ __html: html });
  return (
    <div className="comments-container">
      <div className="comment flex">
        <div className="profile-img">
          <img src={props.comment.img} alt="" />
        </div>
        <div className="comment-body">
          <div className="username">{props.comment.username}</div>
          <div className="description" dangerouslySetInnerHTML={createMarkup(props.comment.description)}></div>
          <div className="action-buttons flex align-center">
            <Heart />
            {props.comment.likesCount > 0 && <span className="likes">{props.comment.likesCount}</span>}
            <i className="fas fa-circle"></i>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentComponent;
