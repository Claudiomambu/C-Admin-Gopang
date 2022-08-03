import "./widgetLg.css";
import { DeleteOutline, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    // Header WidgetLg
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Account Owner</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Location</th>
          <th className="widgetLgTh">Homestay Name</th>
          <th className="widgetLgTh">Warung Name</th>
          <th className="widgetLgTh">Action</th>
        </tr>

        {/* User 1 */}
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgLocation">Marinsow Village, Paal Beach</td>
          <td className="widgetLgHomestayName">Wahyu homestay</td>
          <td className="widgetLgWarungName">Warung Susan</td>
          <td className="actionForOwner">
            <Link to={"/detail/"}>
              <button className="actionEditOwner">Details</button>
            </Link>
            <DeleteOutline
              className="actionDelete"
              // onClick={() => handleDelete(params.row.id)}
            />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jhon doe</span>
          </td>
          <td className="widgetLgLocation">Pulisan Village, Paal Beach</td>
          <td className="widgetLgHomestayName">Dior homestay</td>
          <td className="widgetLgWarungName">none</td>
        </tr>

        {/* ////////
        
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr> */}
      </table>
    </div>
  );
}
