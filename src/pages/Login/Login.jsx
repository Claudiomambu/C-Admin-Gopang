import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import firebase from "../../config/firebase";
import "./login.css";
import Notif from "../../components/notif/Notif";

const firebaseError = {
  "auth/invalid-email": "Kesalahan penulisan format email",

  "auth/wrong-password": "Password Salah.",

  "auth/user-not-found":
    "Tidak ada data pengguna yang sesuai dengan pengenal yang diberikan.",

  else: "Server error.",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState({ isOpen: false, pesan: "", type: "" });

  const Navigate = useNavigate();

  const handleSubmit = () => {
    if (!email && !password) {
      setNotif({
        isOpen: true,
        pesan: "Masukan Email atau Password",
        type: "error",
      });
      // <Alert severity="error">This is an error alert — check it out!</Alert>;
    } else if (!email) {
      setNotif({
        isOpen: true,
        pesan: "Masukan Email",
        type: "error",
      });
    } else if (!password) {
      setNotif({
        isOpen: true,
        pesan: "Masukan Password",
        type: "error",
      });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const uid = res.user.uid;
          // console.log(res.user.uid);
          Navigate(`/${uid}/Dashboard`);
        })
        .catch((error) => {
          console.log("error", error);
          setNotif({
            isOpen: true,
            pesan: "Gagal Login - password atau email salah",
            type: "error",
          });
        });
    }
  };

  return (
    <div className="background">
      <div className="containerLogin">
        <h1>Log In</h1>
        <hr />
        <div style={{ width: "65%" }}>
          <Input
            className="form-control"
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className="form-control"
            label="Password"
            placeholder="Masukkan password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <br />
          <Button
            block
            text="Login"
            textColor="white"
            color="blue"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <Notif notif={notif} setNotif={setNotif} />
    </div>
  );
};

export default Login;
