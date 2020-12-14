import React from "react";
import PostCard from "./PostCard";
import "./Home.css";
import Navbar from "./Navbar";
const posts = [
  {
    id: "Jumpstart x Nextplay Community Partnership: Supporting Black & LatinX Talent",
    companyImg:"https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/H31QWo8ORfKeBr5Ja_c__Q-thumbnail-200x200-70.jpeg",
    companyName: "Jumpstart",
    views: "14,322 Views",
    postHeader: "Jumpstart x Nextplay Community Partnership: Supporting Black & LatinX Talent",
    postDescription: `Jumpstart’s mission is to make the world more equitable by building a collaborative talent marketplace that creates more opportunity for everyone. And while we advance towards this vision daily, it’s not lost on us that so many communities still face heightened barriers to opportunity.\nThat’s why we are so thrilled and honored to be partnering with Nextplay Community, the organization that is working to close the economic gap and bolster career development for Black and LatinX professionals.\nNextplay works to achieve their mission by hosting networking events centered around culture. To experience this partnership in action, make sure to check out Nextplay’s Anniversary networking event happening December 10th, hosted on Jumpstart. You’ll have the opportunity to network with fellow Black and LatinX professionals, as well as connect with organizations looking to hire.\nRSVP:<a target="blank" href="https://jumpstart.me/discover/events/a/a/efb284d4-f352-4f91-94b4-d9b5b1498d14">https://jumpstart.me/discover/events/a/a/efb284d4-f352-4f91-94b4-d9b5b1498d14</a>`,
    postImg: "https://jumpstart-static.s3.amazonaws.com/backend/mediauploads/media/mmS0OfOhRqecI16x-nu-_g.jpeg",
    likesCount:2,
    commentsCount:1
  },
  {
    id: "Twitter and Apple are hiring remote workers + More remote jobs!",
    companyImg:"https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/N-xkB61XSfqqAcmYcnWPJA-thumbnail-200x200-70.jpg",
    companyName: "New Grades",
    views: "1000 Views",
    postHeader: "Twitter and Apple are hiring remote workers + More remote jobs!",
    postDescription: `Hi everyone! I wanted to give you a heads up that Twitter and Apple are hiring for remote jobs!\nTwitter - New Grad Roles - <a href="https://bit.ly/twitter-new-grad">https://bit.ly/twitter-new-grad</a>\nApple - Support College Advisor Program - for current college students - <a href="https://bit.ly/apple-support-college-program">https://bit.ly/apple-support-college-program</a>\nI have a newsletter called The Remote JobHunters where I’ll be sharing more entry-level remote jobs, and my first newsletter is coming out soon.\nIf you are interested in receiving it, please share your email below in the comments!`,
    likesCount:5,
    commentsCount:6
  },
];
function Home() {
  return (
    <div className="main-container flex justify-center">
      <div className="article-container">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="side-container"></div>
      <Navbar />
    </div>
  );
}

export default Home;
