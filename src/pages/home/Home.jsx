import React, { useState, useEffect } from "react";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import firebase from "../../config/firebase";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Home() {
  const { uid } = useParams();
  const [onAdmin, setOnAdmin] = useState(false);

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

  return onAdmin === true ? (
    <div>
      <Topbar />
      <div className="home">
        <div className=" containerAdmin">
          <div>
            <Sidebar />
          </div>
          <div className="homeWidgets">
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Memuat...</h1>
      <h2>
        Jika tetap berada pada halaman ini, kamu mungkin tidak menggunakan akun
        Admin
      </h2>
    </div>
  );
}
