import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = true;
  // const user = false;
  return (
    <div className="top">
      <div className="topLeft ">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
      </div>
      <div className="navbar topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/settings" className="link">
                SETTINGS
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
            {/* <li className="topListItem">{user && "LOGOUT"}</li> */}
          </ul>
      </div>

      <div className="topRight">
        
          <Link to="/write" className="link">
          {user && "LOGOUT"}
          </Link>
        
        {user ? (<img className="topImage"
                  src="http://genial.id/assets/images/news/1602859839"
                  alt=""/>
              ) : (
                <ul className="topList">
                  <li className="topListItem">
                    <Link to="/login" className="link">
                      <button className="btn btn-outline-success btn-sm rounded-pill">LOGIN</button>
                    </Link>
                  </li>
                  <li className="topListItem">
                    <Link to="/register" className="link">
                      <button className="btn btn-outline-danger btn-sm rounded-pill">REGISTER</button>
                    </Link>
                  </li>
                </ul>)}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
