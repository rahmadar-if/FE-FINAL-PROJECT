import "./login.css"
import axios from "axios"
// import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

export default function Login() {
  
  const userRef = useRef();
  const passwordRef = useRef(); 
  const {user, dispatch, isFetching} = useContext(Context);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = axios.post("/auth/login", {
        username : userRef.current.value,
        password : passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    } catch (err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  
  console.log(user);
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>

            <label className="loginLabel">username</label> 
            <input type="text" className="loginInput" placeholder="Enter Your username.." 
            ref={userRef} />

            <label className="loginLabel">Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your Password.." 
            ref={passwordRef} />

            <button className="btn btn-outline-primary btn-sm  loginButton" type="submit">Login</button> 
        </form>
            {/* <button className="loginRegisterButton">Register</button>  */}
            {/* <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>  */}
            
    </div>
  )
}
