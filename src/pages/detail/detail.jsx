import DetailHomestay from "../../components/detailHomestay/DetailHomestay";
import DetailWarung from "../../components/detailWarung/DetailWarung";
import "./detail.css";
import firebase from "../../config/firebase";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const [onHomestay, setOnHomestay] = useState({});
  const [onWarung, setOnWarung] = useState({});
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

  useEffect(() => {
    firebase
      .database()
      .ref(`warung/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnWarung(res.val());

          // console.log(products);
        }
      });
  }, []);

  return (
    <div className="detail">
      <div className="detailUser">
        <DetailHomestay
          photo={onHomestay.photo}
          name={onHomestay.name}
          location={onHomestay.location}
          price={onHomestay.price}
          description={onHomestay.description}
        />
        <DetailWarung
          photo={onWarung.photo}
          name={onWarung.name}
          alamat={onWarung.alamat}
          delivery={onWarung.delivery}
        />
        {/* <AddGazebo /> */}
      </div>
    </div>
  );
}
