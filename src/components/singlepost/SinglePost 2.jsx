import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
            <img
            // src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg"
            src="/assets/cocomelon.png"
            className="singlePostImg"
            alt="" />
        <h1 className="singlePostTitle">
          Coco Melon Exhibition at GGP Mall Bekasi 
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: 
            Lorem Si Tompul
          </span>
          <a href="https://docs.google.com/presentation/d/13vpeKBBU98sxy2WowFZYhzJNYgTJUYrY/edit?usp=sharing&ouid=104900748837089536341&rtpof=true&sd=true">Kunjungi File</a>
          <span className="singlePostDate">1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo dolore expedita a eos necessitatibus amet explicabo fuga assumenda quas? Animi, sequi. Doloribus nulla, officiis perferendis dolores animi accusamus enim?
        </p>
      </div>
    </div>
  );
}
