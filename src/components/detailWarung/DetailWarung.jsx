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
import "./detailWarung.css";

export default function DetailWarung() {
  return (
    <div className="DWContainer">
      <div className="DWShow">
        <div className="DWShowTop">
          <img
            src="https://kulinerkota.com/wp-content/uploads/2020/06/Warung-Ayam-Bakar-KQ-5.jpg"
            alt=""
            className="DWShowImg"
          />
          {/* <div className="DWShowTopTitle">
              <span className="DWShowTypeAccount">Homestay Wahyu</span>
            </div> */}
        </div>
        <div className="DWShowBottom">
          <span className="DWShowTitle">Warung Details</span>
          <div className="DWShowInfo">
            <Storefront className="DWShowIcon" />
            <span className="DWShowInfoTitle">Warung Ayam Bakar KQ-5</span>
          </div>
          <div className="DWShowInfo">
            <LocationSearching className="DWShowIcon" />
            <span className="DWShowInfoTitle">
              Marinsow Village, North Likupang
            </span>
          </div>
          <div className="DWShowInfo">
            <Timer className="DWShowIcon" />
            <span className="DWShowInfoTitle">20 Minute</span>
          </div>

          <span className="DWShowTitle">Contact Details</span>
          <div className="DWShowInfo">
            <PhoneAndroid className="DWShowIcon" />
            <span className="DWShowInfoTitle">089583750271</span>
          </div>
          <button className="DWshowButton">Delete</button>
          {/* <div className="DWshowButton">
            <Button variant="outlined">Default</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
