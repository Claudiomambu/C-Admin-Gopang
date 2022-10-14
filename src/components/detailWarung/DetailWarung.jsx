import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  HomeOutlined,
  Payment,
  Storefront,
  Timer,
} from "@material-ui/icons";
import "./detailWarung.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../config/firebase";

export default function DetailWarung(props) {
  const { uid } = useParams();
  const [onDataW, setOnDataW] = useState("false");

  useEffect(() => {
    firebase
      .database()
      .ref(`warung/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnDataW(true);
        }
      });
  }, []);

  return onDataW === true ? (
    <div className="DWContainer">
      <div className="DWShow">
        <div className="DWShowTop">
          <img
            src={`data:image/jpeg;base64,${props.photo}`}
            className="DWShowImg"
          />
          {/* <div className="DWShowTopTitle">
              <span className="DWShowTypeAccount">Homestay Wahyu</span>
            </div> */}
        </div>
        <div className="DWShowBottom">
          <span className="DWShowTitle">Warung Details</span>
          <div className="DWShowInfo">
            <Storefront className="DWShowIcon" />
            <span className="DWShowInfoTitle">{props.name}</span>
          </div>
          <div className="DWShowInfo">
            <LocationSearching className="DWShowIcon" />
            <span className="DWShowInfoTitle">{props.alamat}</span>
          </div>
          <div className="DWShowInfo">
            <Timer className="DWShowIcon" />
            <span className="DWShowInfoTitle">{props.delivery} Menit</span>
          </div>

          <span className="DWShowTitle">Contact Details</span>
          <div className="DWShowInfo">
            <PhoneAndroid className="DWShowIcon" />
            <span className="DWShowInfoTitle">089583750271</span>
          </div>
          <button className="DWshowButton">Delete</button>
          {/* <div className="DWshowButton">
            <Button variant="outlined">Default</Button>
          </div> */}
        </div>
      </div>
    </div>
  ) : (
    <div className="DHKotak">
      <div className="DHLoading">
        <h3> Loading ....</h3>
        <span>Jika tampilan card tidak berubah, </span>
        <span>Mungkin akun ini tidak memiliki data Warung</span>
      </div>
    </div>
  );
}
