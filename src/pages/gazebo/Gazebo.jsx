import React, { useState, useEffect } from "react";
import "./Gazebo.css";
import CardAG from "../../components/cardAG/CardAG";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailGazebo from "../../components/detailGazebo/DetailGazebo";
import firebase from "../../config/firebase";
import { useParams } from "react-router-dom";

export default function Gazebo() {
  const { uid } = useParams();
  const [onAdmin, setOnAdmin] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref(`users/admin/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnAdmin(true);
        }
      });
  }, []);

  return (
    <div className="gazeboList">
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="UIGazebo">
          {/* View For Add Gazebo */}
          <div>
            <div className="judul-AddGazebo">
              <h3>Add New Gazebo</h3>
            </div>
            <div className="View-AddGazebo">
              <CardAG />
            </div>

            {/* View For List Gazebo */}
            <div className="judul">
              <h3>List Gazebo</h3>
            </div>
            <div className="list-Gazebo">
              <DetailGazebo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
