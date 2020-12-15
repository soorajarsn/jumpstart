import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./postCard.css";
import { Heart, HeartFill, Comment } from "./icons";
function PostCard({ post, isCommentaLink }) {
  const [liked, setLiked] = useState(false);
  const [postDescription, setPostDescription] = useState(post.postDescription);
  console.log(post, postDescription);
  const createMarkup = html => ({ __html: html });
  useEffect(() => {
    const hideContent = () => {
      setPostDescription(() => {
        console.log("Set Description: ", post.postDescription.substr(0, 150) + (post.postDescription.length > 151 && "..."));
        return post.postDescription.substr(0, 150) + (post.postDescription.length > 151 && "...");
      });
    };
    if (window.innerWidth < 700) {
      hideContent();
    }
  }, []);
  return (
    <article className="card-container card-font">
      <div className="about-container flex">
        <div className="avatar-img-container link">
          <img src={post.companyImg} alt="" />
        </div>
        <div className="author-views-container">
          <span className="company-name link">{post.companyName}</span>
          <div className="views-when-container">
            <i className="fas fa-circle"></i>
            <span className="views">{post.views}</span>
          </div>
        </div>
      </div>
      <div className="post-content-container">
        <span className="post-content-main">
          <h3 className="post-header">{post.postHeader}</h3>
          <div className="post-description">
            {postDescription && postDescription.split("\n").map((description, index) => <p key={index} dangerouslySetInnerHTML={createMarkup(description)}></p>)}
          </div>
          {post.postImg && (
            <div className="post-img">
              <img src={post.postImg} alt="" />
            </div>
          )}
        </span>
        <span className="action-buttons-container flex">
          <button className={"like-button flex align-center link " + (liked && "liked")} onClick={() => setLiked(prev => !prev)}>
            {(!liked && <Heart />) || <HeartFill />}
            {post.likesCount != 0 && <span className="likes-count">{post.likesCount + ((liked && 1) || 0)}</span>}
          </button>
          {isCommentaLink ? (
            <Link to={"/comment/" + post.id}>
              <button className="comment-button flex link">
                <Comment />
                {post.commentsCount != 0 && <span className="comment-count">{post.commentsCount}</span>}
              </button>
            </Link>
          ) : (
            <button className="comment-button flex link">
              <Comment />
              {post.commentsCount != 0 && <span className="comment-count">{post.commentsCount}</span>}
            </button>
          )}
        </span>
      </div>
    </article>
  );
}

export default PostCard;
