import "./widgetLg.css";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { options } from "../../dummyData";



export default function widgetLg () {
  return(
  <div className="widgetLg">
    <span className="widgetLgTitle">Delivery Number</span>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>

);
}
