import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import firebase from "../../config/firebase";
// import confirmDialog from "../../components/confirmDialog/confirmDialog";

export default function UserList() {
  const { uid } = useParams();
  const [user, setOnUser] = useState([]);
  // const [confirmDialog, setConfirmDialog] = useState({
  //   isOpen: false,
  //   title: "",
  //   subTitle: "",
  // });

  useEffect(() => {
    firebase
      .database()
      .ref(`users/pelanggan/`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map((key) => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setOnUser(productArray);

          // console.log(products);
        }
      });
  }, []);

  const handleDelete = (key) => {
    firebase.database().ref(`users/pelanggan/${key.id}`).remove();
  };

  return (
    <div>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="DataUser">
          <h3 className="title">User Account</h3>
          <table className="tabelUser">
            <tr className="data">
              <th className="KolomData">Name</th>
              <th className="KolomData">Email</th>
              <th className="KolomData">Phone Number</th>
              <th className="KolomData">Action</th>
            </tr>

            {/* Mapping Data User (pengguna) */}

            {user.map((key) => (
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src={`data:image/jpeg;base64,${key.photo} `}
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{key.name}</span>
                </td>
                <td className="widgetLgEmail">{key.email}</td>
                <td className="widgetLgPhoneNumber">{key.number}</td>
                <td className="actionForUser">
                  {/* <button
                    className="actionEdit"
                    
                  >
                    hapus
                  </button> */}

                  <DeleteOutline
                    className="actionDelete"
                    onClick={() => handleDelete(key)}
                    // onClick={() => {
                    //   setConfirmDialog({
                    //     isOpen: true,
                    //     title: "Hapus?",
                    //     subTitle: "Yakin ingin Hapus akun ini?",
                    //   });
                    // }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      {/* <confirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      /> */}
    </div>
  );
}
