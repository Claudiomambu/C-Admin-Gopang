import "./Gazebo.css";
import CardAG from "../../components/cardAG/CardAG";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailHomestay from "../../components/detailHomestay/DetailHomestay";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Gazebo() {
  return (
    <div className="gazeboList">
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="UIGazebo">
          <div>
            <div className="judul">
              <h3>List Gazebo</h3>
              <button className="ButtonAG">Add</button>
              <hr />
            </div>
            <div className="list-Gazebo">
              {/* <DetailHomestay /> */}
              <CardAG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
