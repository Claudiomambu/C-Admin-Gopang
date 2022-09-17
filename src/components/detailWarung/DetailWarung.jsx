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

export default function DetailWarung(props) {
  return (
    <div className="DWContainer">
      <div className="DWShow">
        <div className="DWShowTop">
          <img
            src={`data:image/jpeg;base64,${props.photo}`}
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
            <span className="DWShowInfoTitle">{props.name}</span>
          </div>
          <div className="DWShowInfo">
            <LocationSearching className="DWShowIcon" />
            <span className="DWShowInfoTitle">{props.alamat}</span>
          </div>
          <div className="DWShowInfo">
            <Timer className="DWShowIcon" />
            <span className="DWShowInfoTitle">{props.delivery}</span>
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
