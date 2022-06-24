import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css";
import axios from "axios"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPost = async ()=>
    {
      const res = await axios.get("/posts"+search)
      // console.log(res);
      setPosts(res.data)
    }
    fetchPost()
  },[search])

  return (
    <>
      <Header/>
        <div className="home container-lg">
            <Posts posts={posts} />
            <Sidebar/>
        </div>
    </>
  )
}