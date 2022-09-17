import Chart from "../../components/chart/Chart";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="home">
        <div className=" containerAdmin">
          <div>
            <Sidebar />
          </div>
          <div className="homeWidgets">
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  );
}
