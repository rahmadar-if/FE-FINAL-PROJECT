import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  // console.log(user.profilePicture);


  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  }   
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
        
            <a className="btn btn-active-secondary topListItem btn-sm rounded-pill" onClick={handleLogout}>{user && "LOGOUT"}</a>
            {user && <p className="topListName">Hi,{user.username}</p>}

        {user ? ( <img className="topImage"
                  // src="/assets/rahmad.png"
                  src={user.profilePicture}
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
