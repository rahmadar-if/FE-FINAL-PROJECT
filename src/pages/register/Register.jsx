import { useState } from "react";
import axios from "axios";
import "./register.css"
// import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }
  };
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>

            <label className="registerLabel">Username</label>
            <input type="text" className="registerInput" placeholder="create username.." onChange={e=>setUsername(e.target.value)}/>
            <label className="registerLabel">Email</label>
            <input type="email" className="registerInput" placeholder="example@mail.com" onChange={e=>setEmail(e.target.value)}/>
            <label className="registerLabel">Password</label>
            <input type="password" className="registerInput" placeholder="create password.." onChange={e=>setPassword(e.target.value)}/>

            <button type="submit" className="btn btn-outline-danger btn-sm registerButton mb-2">register</button>
        </form>
            {error && <span class="text-danger small" role="alert"><strong>Something Wrong !</strong> Try different Username.
            </span>}
    </div>
  )
}
