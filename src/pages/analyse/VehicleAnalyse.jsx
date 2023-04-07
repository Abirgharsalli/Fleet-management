import React from 'react';
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import VehicleFunctions from './VehicleFunctions.js';
import HighchartsReact from 'highcharts-react-official';

// Load Highcharts modules
import HighchartsData from 'highcharts/modules/data';
import HighchartsExporting from 'highcharts/modules/exporting';
import './vehicleAnalyse.css';

HighchartsData(Highcharts);
HighchartsExporting(Highcharts);



export default class VehicleAnalyse extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      chartOptions: {
        chart: {
        
            type: 'bar'
        },
        title: {
            text: 'Vehicles consumption fuel / month'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Avr', 'May','June','July','August','Sep','Oct','Nov','Dec']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Fuel usage (Thounsed L/month)'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            bar: {
              showInLegend: true,
            },
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Vehicle 1',
            data: [5, 3, 4, 3, 2,1,4,3,3,4,5,2]
        }, {
            name: 'Vehicle 2',
            data: [2, 2, 3, 2, 1,3,3,1,2,1,2,3]
        }, {
            name: 'Vehicle 3',
            data: [1, 2, 3, 2, 1,5,3,6,6,1,2,3]
        },
        {
            name: 'Vehicle 4',
            data: [3, 2, 3, 1, 1,5,3,5,3,1,2,3]
        },
        {
            name: 'Vehicle 5',
            data: [4, 2, 3, 2, 3,5,3,6,7,1,2,3]
        }]
        
    },
    
      options : {
        chart: {
          type: "pie"
        },
        title: {
          text: "Vehicles type statistics"
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: false
          }
        },
        series: [
          {
            name: "Vehicles",
            colorByPoint: true,
            data: [
              {
                name:'Small Vehicles',
                y: 2,
                sliced: true
              },
              {
                name:'Big Vehicles',
                y: 3,
                sliced: true
              }
            ]
          }
         ]
        }
          
        
      
    }
    this.getChart = this.getChart.bind(this);
    
}

getChart(event){
  if(event.target.value==="Vehicles"){
    VehicleFunctions.get_Gender().then((res) => {
      console.log(res.data)
      if (res.data == null) {
          this.props.history.push('/');
          
      } 
      let Small=res.data[0]['Small Vehicles'];
      let Big=res.data[0]['Big Vehicles'];
      let total=res.data[0]['total'];
      this.setState({ 
      options:{
        title: {
          text: "Vehicles type statistics"
        },
        series:{
          name: "Vehicles",
          data: [
          {
            y: (Small/total)*100
          },
          {
            y: (Big/total)*100
          }
        ]
        }
      }});
      
  });
  }else{
    VehicleFunctions.get_Product_Line().then((res) => {
      console.log(res.data)
      if (res.data == null) {
          this.props.history.push('/');
          
      }
      let total=res.data[0]['total'];
      let newData=[];
      for (let i = 0; i < res.data.length; i++) {
        let name=res.data[i]['name'];
        let count=res.data[i]['som'];
        newData.push({
          name:name,
          y:(count/total)*100
        });
      }
      console.log(newData);
      this.setState({ 
      options:{
        title: {
              text: "Product_Line statistics"
            },
        series:{
          name: "Product Line",
          data: newData
        }
      }});
      
    });
  }
  

}

componentDidMount() {
  VehicleFunctions.get_Gender().then((res) => {
        console.log(res.data)
        if (res.data == null) {
            this.props.history.push('/');
            
        } 
        let Small=res.data[0]['Small Vehicles'];
        let Big=res.data[0]['Big Vehicles'];
        let total=res.data[0]['total'];
        this.setState({ 
        options:{
          series:{
            data: [
            {
              y: (Small/total)*100
            },
            {
              y: (Big/total)*100
            }
          ]
          }
        }});

        
    });
    VehicleFunctions.get_dash1().then((res) => {
      console.log(res.data)
      if (res.data == null) {
          this.props.history.push('/');

      }
      let Jan=res.data[0]['Jan'];
      let Feb=res.data[0]['Feb'];
      
    this.setState({
        chartOptions: {
            series:{
                data: [
                {
                  z:1500
                },
                {
                  z:5000
                },
                {
                  z:2000
                }
              ]
              }
    }
});
});

    //console.log(this.state.chartOptions.series)
}


  render() {
    const mystyle1 = {
      color: "cornflowerblue",
      fontSize: "20px"
    };

    const mystyle = {
      position:"relative",
      left: "100px",
      fontSize: "15px"
    };


    return (
      <div className='analyse'>
        <div style={mystyle}>
        <h3 style={mystyle1}> Change attribut</h3>
        <select  id="attribut" onChange={this.getChart} value={this.state.value}>
          <option value="Vehicles">Type</option>
          <option value="Product">Product Line</option>
        </select>
        </div>
        <PieChart highcharts={Highcharts} options={this.state.options} />
        <HighchartsReact options = { this.state.chartOptions } highcharts = { Highcharts }/> 
      </div>
    );
  }
}

