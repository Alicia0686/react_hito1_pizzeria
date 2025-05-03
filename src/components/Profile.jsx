import{ useContext, useEffect, useState } from "react";
import {UsersContext } from "../context/UsersContext";
import "./Profile.css";


const Profile = () => {
  const{ token, getUsersProfile, logout } = useContext(UsersContext);
  const [usersProfile, setUsersProfile]= useState(null);

  
  const cargarUserProfile= async ()=>{
    const data = await getUsersProfile();
    setUsersProfile(data);
  }  

  useEffect(() => {
    if (token) {
      cargarUserProfile();
    }
  }, [token]);

     
  return (
    <>
      <div className="profile">
        <h2>Profile</h2>
        <div className="text">
          <p>Email: {usersProfile? usersProfile.email : "Cargando profile"}</p>
        </div>
        <div className="btn1">
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
