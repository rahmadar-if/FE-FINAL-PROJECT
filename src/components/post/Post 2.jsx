import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post d-inline">
      <div>

      <img
        className="postImg"
        src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg"
         alt="" />
      <div className="postInfo">

        <div className="postCats">
          <span className="span postCat"></span>
        </div>

          <Link to="/post/:postId" className="link">
            <span className="postTitle">Porto Title</span>
          </Link>
        
        <span className="postDate">1 day ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
      </p>
      </div>
      
      <div>

      <img
        className="postImg"
        src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg"
         alt="" />
      <div className="postInfo">

        <div className="postCats">
          <span className="span postCat"></span>
        </div>

          <Link to="/post/" className="link">
            <span className="postTitle">Porto Title</span>
          </Link>
        
        <span className="postDate">1 day ago</span>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
        numquam labore porro hic ipsa iure tempore inventore eos maiores enim
        fuga illum, cum illo earum soluta debitis odio? Corrupti?
      </p>
      </div>
    </div>
  );
}
