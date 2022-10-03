import "./Gazebo.css";
import CardAG from "../../components/cardAG/CardAG";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailGazebo from "../../components/detailGazebo/DetailGazebo";

export default function Gazebo() {
  return (
    <div className="gazeboList">
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="UIGazebo">
          {/* View For Add Gazebo */}
          <div>
            <div className="judul-AddGazebo">
              <h3>Add New Gazebo</h3>
            </div>
            <div className="View-AddGazebo">
              <CardAG />
            </div>

            {/* View For List Gazebo */}
            <div className="judul">
              <h3>List Gazebo</h3>
            </div>
            <div className="list-Gazebo">
              <DetailGazebo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
