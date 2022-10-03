import "./sidebar.css";
import {
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  PermIdentityTwoTone,
  DeckOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard Owner</h3>
          <ul className="sidebarList">
            <Link to="/Dashboard" className="link">
              <li className="sidebarListItem">
                <PermIdentityTwoTone className="sidebarIcon" />
                Owner
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Another Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/gazebo" className="link">
              <li className="sidebarListItem">
                <DeckOutlined className="sidebarIcon" />
                List Gazebo
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              List
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
