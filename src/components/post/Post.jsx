import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  const PF = "localhost:5000/images"
  return (
    <div className="post">
      {post.photo && (
      <img
        className="postImg"
        // src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?cs=srgb&dl=pexels-monoar-rahman-114907.jpg&fm=jpg"
        src={PF + post.photo} alt="" />
      )}
      <div className="postInfo">

        <div className="postCats">
          {post.categories.map((c) => (
          <span className="span postCat">{c.name}</span>
          ))}
        </div>

          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
        
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>

      <p className="postDesc">{post.desc} :
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
  );
}
