import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  HomeOutlined,
  Payment,
  AttachMoney,
} from "@material-ui/icons";
import "./detailHomestay.css";

export default function DetailHomestay() {
  return (
    <div className="DHContainer">
      <div className="DHShow">
        <div className="DHShowTop">
          <img
            src="https://asset.kompas.com/crops/fWHyqunJIO-l0VvHfhPZStbzUKM=/0x0:1280x853/750x500/data/photo/2021/03/09/60475ba76ea0d.jpg"
            alt=""
            className="DHShowImg"
          />
          {/* <div className="DHShowTopTitle">
            <span className="DHShowTypeAccount">Homestay Wahyu</span>
          </div> */}
        </div>
        <div className="DHShowBottom">
          <span className="DHShowTitle">Homestay Details</span>
          <div className="DHShowInfo">
            <HomeOutlined className="DHShowIcon" />
            <span className="DHShowInfoTitle">Wahyu Homestay</span>
          </div>
          <div className="DHShowInfo">
            <LocationSearching className="DHShowIcon" />
            <span className="DHShowInfoTitle">
              Marinsow Village, North Likupang
            </span>
          </div>
          <div className="DHShowInfo">
            <AttachMoney className="DHShowIcon" />
            <span className="DHShowInfoTitle">Rp.200.000 / Night</span>
          </div>
          <span className="DHShowTitle">Contact Details</span>
          <div className="DHShowInfo">
            <PhoneAndroid className="DHShowIcon" />
            <span className="DHShowInfoTitle">089583750271</span>
          </div>
          <div className="DHShowInfo">
            <MailOutline className="DHShowIcon" />
            <span className="DHShowInfoTitle">annabeck99@gmail.com</span>
          </div>
          <button className="DHshowButton">Delete</button>
        </div>
      </div>
    </div>
  );
}
