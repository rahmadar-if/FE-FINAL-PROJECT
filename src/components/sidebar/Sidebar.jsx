import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
          src="https://images.pexels.com/photos/7616842/pexels-photo-7616842.jpeg?cs=srgb&dl=pexels-los-muertos-crew-7616842.jpg&fm=jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit
          enim, expedita perferendis ut vitae fuga laboriosam dolores quisquam
          voluptatem corporis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
              </Link>
            ))}
            {/* <li className="sidebarListItem">Design Art</li>
             */}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocialContainer">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
