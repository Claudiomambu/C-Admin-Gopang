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
import React from "react";
import { useParams } from "react-router-dom";

export default function DetailHomestay(props) {
  // const handleDelete = (key) => {
  //   firebase.database().ref(`homestay/${key.id}`).remove();
  // };

  return (
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
          <button className="DHshowButton">Delete</button>
        </div>
      </div>
    </div>
  );
}
