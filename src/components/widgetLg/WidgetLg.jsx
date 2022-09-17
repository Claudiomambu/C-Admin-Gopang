import "./widgetLg.css";
import { DeleteOutline, Delete } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import firebase from "../../config/firebase";
import { DataGrid } from "@material-ui/data-grid";

export default function WidgetLg() {
  const { uid } = useParams();
  const [onOwner, setOnOwner] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/owner/`)
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
          setOnOwner(productArray);

          // console.log(products);
        }
      });
  }, []);

  // const handleDelete = (key) => {
  //   firebase.database().ref(`users/owner/${key.id}`).remove();
  // };

  return (
    // Header WidgetLg
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Account Owner</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Phone Number</th>
          <th className="widgetLgTh">Action</th>
        </tr>

        {/* Mapping data owner ke UI admin */}
        {onOwner.map((key) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src={`data:image/jpeg;base64,${key.photo} `}
                className="widgetLgImg"
              />
              <span className="widgetLgName">{key.name}</span>
            </td>
            <td className="widgetLgLocation">{key.email}</td>
            <td className="widgetLgHomestayName">{key.number}</td>
            <td className="actionForOwner">
              {/* <Link to={`/detail`}> */}
              <a href={`/${key.id}/Detail`}>
                <button className="actionEditOwner">Details</button>
              </a>
              {/* </Link> */}
              {/* <DeleteOutline
                className="actionDelete"
                onClick={() => handleDelete(key)}
              /> */}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
