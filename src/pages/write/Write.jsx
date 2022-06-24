import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle]= useState("");
  const [desc, setDesc]= useState("");
  const [file, setFile]= useState(null);
  const {user} = useContext(Context);


  const handleSubmit = async (e) => {
    // e.preventDevault();
    const newPost = { 
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      // console.log(data);
      try{
        await axios.post("/upload", data);
      }catch(err){
        console.log(err);
      }
    }
    try{
     const res = await axios.post("/posts", newPost);
     window.location.replace("/post/"+ res.data._id)
    }catch(err) {
       console.log(err);
    } 

  };

  return (
    <div className="write">
      { file && (
        <img src={URL.createObjectURL(file)} className="writeImg mb-4" alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
          <div className="container-sm writeFormGroup row">

            <label htmlFor="fileInput">
              <i className="bi bi-plus-lg"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} 
            onChange = {(e) => setFile(e.target.files[0])}/>


            <input 
              type="text" 
              className="writeInput"
              placeholder="Title"
              autoFocus={true}
              onChange = {(e) => setTitle(e.target.value)}/>

            <textarea
              type="text" 
              className="writeInput writeText"
              placeholder="desc"
              onChange = {(e) => setDesc(e.target.value)}></textarea>

              <button className="writeSubmit" type="submit">Publish</button>








            {/* <div className="input-group mb-3 small">
              <span className="input-group-text" id="inputGroup-sizing-default">Input Title</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                onChange = {e => setTitle(e.target.value)} autoFocus={true}/>
            </div>

            <div className="input-group">
              <span className="input-group-text">Insert Desc</span>
              <textarea className="form-control" aria-label="With textarea" 
              onChange = {e => setDesc(e.target.value)}></textarea>
            </div>
          
            <div>
              <label htmlFor="fileInput"><i className="bi bi-plus-lg"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} 
              onChange = {(e) => setFile(e.target.files[0])}/>
              
              <a className="writeSubmit btn btn-outline-success btn-sm"><i className="bi bi-plus-lg"></i> Image</a>
              <button className="writeSubmit btn btn-outline-success btn-sm" type="submit">Publish</button>
            </div> */}
              
          </div>
      </form>
    </div>
              
  );
}
