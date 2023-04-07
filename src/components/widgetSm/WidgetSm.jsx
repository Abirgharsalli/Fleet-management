import "./widgetSm.css";
import { PieChart, Pie , Tooltip} from 'recharts';
import { countryData } from "../../dummyData";


export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Country Analytics</span>
      <div className="widgetSmPie">
      <PieChart width={300} height={300}>
          <Pie data={countryData} dataKey="Number" outerRadius={150} fill="blue" />
          <Tooltip/>
        </PieChart>
        </div>
    </div>
  );
}
