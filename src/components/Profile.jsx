import "./Profile.css"
import { Form } from "react-bootstrap";
const Profile = () => {
  
  return (
    <>
      <div className="profile">
        <h2>Profile</h2>
        <div className="inputs">
          <label>Nombre de usuario</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="btn1">
          <button>Cerrar sesión</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
