import "./cardAG.css";
import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const CardAG = () => {
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setPhoto(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = () => {
    const data = {
      photo: photo,
      location: location,
      size: size,
    };
    console.log(data);
    firebase.database().ref(`gazebo`).push(data);

    // firebase.child(`gazebo`).push(data);
    navigate(`/Dashboard`);
    setLocation("");
    setSize("");
    setPhoto("");
  };

  return (
    <div className="AGContainer">
      <div className="AddGazebostyle">
        <span className="AddGazeboTitle">Add Gazebo ...</span>
        {/* <form className="userUpdateForm"></form> */}

        <div className="userUpdateItem">
          {/* Msukan foto Gazebo */}
          <span>Photo</span>
          <input
            className="addPhoto"
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <br />
          {/* Pilihan lokasi Gazebo */}
          <span>Location</span>
          <select
            className="dropdown"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option>--- Choose Location ---</option>
            <option value="Paal">Paal</option>
            <option value="Pulisan">Pulisan</option>
            <option value="Kinunang">Kinunang</option>
          </select>
          {location}

          {/* Pilihan size Gazebo */}
          <span className="Title">Size</span>
          <select
            className="dropdown"
            placeholder="ukuran"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option>--- Choose Size ---</option>
            <option value="3x4">3x4</option>
            <option value="5x4">5x4</option>
            <option value="6x4">6x4</option>
          </select>
          {size}
          <button className="ButtonADD" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAG;
