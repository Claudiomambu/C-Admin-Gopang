import React from "react";
import "./cardUser.css";
import { useParams, Link } from "react-router-dom";
import { DeleteOutline, Delete } from "@material-ui/icons";

const cardUser = ({ gambar, name, location, HSname, Wname }) => {
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img
          src={`data:image/jpeg;base64,${gambar} `}
          className="widgetLgImg"
          //   style={{
          //     width: 40,
          //     height: 40,
          //     borderRadius: "50%",
          //     //objectFit: cover,
          //     marginRight: 10,
          //   }}
        />
        <span className="widgetLgName">{name}</span>
      </td>
      <td className="widgetLgLocation">{location}</td>
      <td className="widgetLgHomestayName">{HSname}</td>
      <td className="widgetLgWarungName">{Wname}</td>
      <td className="actionForOwner">
        <Link to={"/detail/"}>
          <button className="actionEditOwner">Details</button>
        </Link>
        <DeleteOutline
          className="actionDelete"
          // onSubmit={() => handleDelete(key)}
          // onClick={() => handleDelete(params.row.id)}
        />
      </td>
    </tr>
  );
};

export default cardUser;
