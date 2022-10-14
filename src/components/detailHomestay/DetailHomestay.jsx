import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  HomeOutlined,
  Payment,
  AttachMoney,
  FormatAlignLeftOutlined,
} from "@material-ui/icons";
import "./detailHomestay.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../config/firebase";

export default function DetailHomestay(props) {
  const { uid } = useParams();
  const [onData, setOnData] = useState("false");

  useEffect(() => {
    firebase
      .database()
      .ref(`homestay/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnData(true);
        }
      });
  }, []);

  const handleDelete = (key) => {
    firebase.database().ref(`homestay/${key.id}`).remove();
  };

  return onData === true ? (
    <div className="DHContainer">
      <div className="DHShow">
        <div className="DHShowTop">
          <img
            src={`data:image/jpeg;base64,${props.photo}`}
            className="DHShowImg"
          />
        </div>
        <div className="DHShowBottom">
          <span className="DHShowTitle">Homestay Details</span>
          <div className="DHShowInfo">
            <HomeOutlined className="DHShowIcon" />
            <span className="DHShowInfoTitle"> {props.name}</span>
          </div>
          <div className="DHShowInfo">
            <LocationSearching className="DHShowIcon" />
            <span className="DHShowInfoTitle">{props.location}</span>
          </div>
          <div className="DHShowInfo">
            <AttachMoney className="DHShowIcon" />
            <span className="DHShowInfoTitle">Rp.{props.price} / Night</span>
          </div>
          <div className="DHShowInfo">
            <FormatAlignLeftOutlined className="DHShowIcon" />
            <span className="DHShowInfoTitle">{props.description}</span>
          </div>
          {/* <span className="DHShowTitle">Contact Details</span>
          <div className="DHShowInfo">
            <PhoneAndroid className="DHShowIcon" />
            <span className="DHShowInfoTitle">089583750271</span>
          </div>
          <div className="DHShowInfo">
            <MailOutline className="DHShowIcon" />
            <span className="DHShowInfoTitle">annabeck99@gmail.com</span>
          </div> */}
          <button className="DHshowButton" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="DHKotak">
      <div className="DHLoading">
        <h3> Loading ....</h3>
        <span>Jika tampilan card tidak berubah, </span>
        <span>Mungkin akun ini tidak memiliki data Homestay</span>
        {/* <span>If the card display doesn't change, </span>
        <span>Maybe this account doesn't have Homestay data</span> */}
      </div>
    </div>
  );
}
