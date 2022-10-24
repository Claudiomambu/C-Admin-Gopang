import "./cardAG.css";
import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import Notif from "../../components/notif/Notif";
import { useParams, useNavigate } from "react-router-dom";

const CardAG = () => {
  const { uid } = useParams();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [ownerPH, setOwnerPH] = useState("");

  const [notif, setNotif] = useState({ isOpen: false, pesan: "", type: "" });

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
    if (!photo || !name || !location || !size || !ownerPH) {
      setNotif({
        isOpen: true,
        pesan: "Tidak Boleh ada data yang kosong",
        type: "warning",
      });
    } else {
      const data = {
        photo: photo,
        name: name,
        location: location,
        size: size,
        number: ownerPH,
      };
      console.log(data);
      firebase.database().ref(`gazebo`).push(data);

      // firebase.child(`gazebo`).push(data);
      navigate(`/${uid}/gazebo`);
      setName("");
      setPhoto("");
      setLocation("");
      setSize("");
      setOwnerPH("");
    }
  };

  return (
    <div className="AGContainer">
      <div className="AddGazebostyle">
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

          <span className="Title">Gazebo Name</span>
          <input
            className="gazeboName"
            type="text"
            placeholder="Input Gazebo Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
          {/* {location} */}

          {/* Pilihan size Gazebo */}
          <span className="Title">Size</span>
          <select
            className="dropdown"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option>--- Choose Size ---</option>
            <option value="3x2">3x2</option>
            <option value="3x4">3x4</option>
            <option value="5x4">5x4</option>
            <option value="6x4">6x4</option>
          </select>
          {/* {size} */}

          <span className="Title">Owner Number</span>
          <input
            className="PhoneNumber"
            type="text"
            placeholder="Input Owner Number"
            value={ownerPH}
            onChange={(event) => setOwnerPH(event.target.value)}
          />
          {/* {o}wnerPH */}

          <button className="ButtonADD" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <Notif notif={notif} setNotif={setNotif} />
    </div>
  );
};

export default CardAG;
