import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect (() => {
    const getPost = async () => {
      const res = await axios.get("/posts/"+path);
      // console.log(res);
      setPost(res.data)
    };
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          {post.photo && (
            <img
            // src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg"
            src={post.photo}
            className="singlePostImg"
            alt="" />
            )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: 
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
