import DetailHomestay from "../../components/detailHomestay/DetailHomestay";
import DetailWarung from "../../components/detailWarung/DetailWarung";
import "./detail.css";
import firebase from "../../config/firebase";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const [onHomestay, setOnHomestay] = useState({});
  const { uid } = useParams();

  useEffect(() => {
    firebase
      .database()
      .ref(`homestay/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnHomestay(res.val());

          // console.log(products);
        }
      });
  }, []);

  return (
    <div className="detail">
      <div className="detailUser">
        <DetailHomestay
          name={onHomestay.name}
          photo={onHomestay.photo}
          location={onHomestay.location}
        />
        <DetailWarung />
      </div>
    </div>
  );
}
