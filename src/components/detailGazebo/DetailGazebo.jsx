import {
  LocationOnOutlined,
  CropFreeOutlined,
  PhoneAndroid,
  DeckOutlined,
} from "@material-ui/icons";
import "./detailGazebo.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../config/firebase";

export default function DetailGazebo() {
  const [onGazebo, setOnGazebo] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`gazebo/`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map((key) => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setOnGazebo(productArray);

          // console.log(products);
        }
      });
  }, []);

  const handleDelete = (key) => {
    firebase.database().ref(`gazebo/${key.id}`).remove();
  };

  return (
    <div className="DGContainer">
      {onGazebo.map((key) => (
        <div className="DHShow">
          <div className="DHShowTop">
            <img src={`${key.photo}`} className="DHShowImg" />
          </div>
          <div className="DHShowBottom">
            <span className="DHShowTitle">Gazebo Details</span>
            <div className="DHShowInfo">
              <DeckOutlined className="DHShowIcon" />
              <span className="DHShowInfoTitle">{key.name}</span>
            </div>

            <div className="DHShowInfo">
              <LocationOnOutlined className="DHShowIcon" />
              <span className="DHShowInfoTitle">{key.location} Beach</span>
            </div>

            <div className="DHShowInfo">
              <CropFreeOutlined className="DHShowIcon" />
              <span className="DHShowInfoTitle">{key.size} </span>
            </div>

            <span className="DHShowTitle">Contact Owner</span>
            <div className="DHShowInfo">
              <PhoneAndroid className="DHShowIcon" />
              <span className="DHShowInfoTitle">{key.number} </span>
            </div>

            <button className="DHshowButton" onClick={() => handleDelete(key)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="DHShowInfo">
              <FormatAlignLeftOutlined className="DHShowIcon" />
              <span className="DHShowInfoTitle">{props.description}</span>
            </div> */
}
{
  /* <div className="DHShowInfo">
              <HomeOutlined className="DHShowIcon" />
              <span className="DHShowInfoTitle"> {props.name}</span>
            </div> */
}
{
  /* <span className="DHShowTitle">Contact Details</span>
            <div className="DHShowInfo">
              <PhoneAndroid className="DHShowIcon" />
              <span className="DHShowInfoTitle">089583750271</span>
            </div>
            <div className="DHShowInfo">
              <MailOutline className="DHShowIcon" />
              <span className="DHShowInfoTitle">annabeck99@gmail.com</span>
            </div> */
}
