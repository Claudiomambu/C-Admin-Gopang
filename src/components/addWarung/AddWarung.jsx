import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  HomeOutlined,
  Payment,
  Storefront,
  Timer,
} from "@material-ui/icons";
import "./addWarung.css";

export default function addWarung() {
  return (
    <div className="AWContainer">
      <div className="AddWarungstyle">
        <span className="AddWarungTitle">Add Warung</span>
        <form className="userUpdateForm"></form>

        <div className="userUpdateItem">
          <label>Warung Name</label>
          <input
            type="text"
            placeholder="Warung wahyu"
            className="userUpdateInput"
          />

          <button className="ButtonADD">Add Warung</button>
        </div>
      </div>
    </div>
  );
}
