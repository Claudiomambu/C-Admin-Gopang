import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
// import confirmDialog from "../confirmDialog/confirmDialog";

export default function Topbar() {
  // const [confirmDialog, setConfirmDialog] = useState({
  //   isOpen: false,
  //   title: "",
  //   subTitle: "",
  // });
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">GOPANG</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            {/* <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language /> */}
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <Link to={"/"}>
            <button
              className="logOut"
              // onClick={() => {
              //   setConfirmDialog({
              //     isOpen: true,
              //     title: "Keluar ?",
              //     subTitle: "Yakin ingin keluar dari halaman Admin Gopang?",
              //   });
              // }}
            >
              Keluar
            </button>
          </Link>

          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
        </div>
        {/* <confirmDialog /> */}
      </div>
    </div>
  );
}
