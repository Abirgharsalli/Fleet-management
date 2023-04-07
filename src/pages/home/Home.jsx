import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";
import { userData } from "../../dummyData";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Users Analytics" grid dataKey="User Number"/>
      <div className="homeWidgets">
      <WidgetSm />
      <WidgetLg />
        
      </div>
      
    </div>
  );
}
