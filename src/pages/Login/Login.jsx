import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import firebase from "../../config/firebase";
import "./login.css";

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

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email && !password) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    } else if (!email) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    } else if (!password) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const uid = res.user.uid;
          // console.log(res.user.uid);
          Navigate(`/Dashboard`);
        })
        .catch((error) => {
          console.log("error", error);
          // <Alert severity="error">This is an error alert — check it out!</Alert>;
          // const MySwal = withReactContent(Swal);

          // MySwal.fire({
          //   title: <strong>Gagal Login!</strong>,
          //   html: <i>{firebaseError[error.code]}</i>,
          //   icon: "error",
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
    </div>
  );
};

export default Login;
