import React from "react";
import "./Comment.css";
import { Heart, Comment } from "./icons";
function CommentComponent(props) {
  return (
    <div className="comments-container">
      <div className="comment flex">
        <div className="profile-img">
          <img src="https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/DUBfKxJPSnuPM68qX_yblw-thumbnail-200x200-70.jpg" alt="" />
        </div>
        <div className="comment-body">
          <div className="username">Andrew Nguyen</div>
          <div className="description">Love this thank you so much!</div>
          <div className="action-buttons flex align-center">
            <Heart />
            <i className="fas fa-circle"></i>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentComponent;
