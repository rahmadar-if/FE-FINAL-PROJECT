import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="btn btn-outline-danger btn-sm settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="http://genial.id/assets/images/news/1602859839"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Username"/>
          <label>Email</label>
          <input type="email" placeholder="example@mail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit btn btn-outline-success btn-sm">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
