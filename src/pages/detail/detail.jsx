import WidgetLg from "../../components/widgetLg/WidgetLg";
import DetailHomestay from "../../components/detailHomestay/DetailHomestay";
import DetailWarung from "../../components/detailWarung/DetailWarung";
import AddWarung from "../../components/addWarung/AddWarung";
import "./detail.css";

export default function detail() {
  return (
    <div className="detail">
      {/* //   <Chart */}
      {/* //     data={userData}
      //     title="User Analytics"
      //     grid
      //     dataKey="Active User"
      //> */}
      <div className="detailUser">
        {/* <WidgetSm /> */}
        {/* <WidgetLg /> */}
        <DetailHomestay />
        <DetailWarung />
        <AddWarung />
      </div>
    </div>
  );
}
