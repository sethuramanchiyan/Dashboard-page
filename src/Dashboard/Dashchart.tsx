import React from 'react';
import './Assets/CSS/Dashchart.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Dashchart() {
    const optionsnew = {
        chart: {
          type: "spline"
        },
        title:{
            text:"By Users"
        },
        yAxis:{
            title:{
                  text:"Users"
            }
        },
        style:{
            fontsize:"20px",
            color:"red"
        },
        series: 
        [
            {
          data: [1, 2, 1,4,2,5,3,6,4,2]
            },
            {
                data: [3, 2, 1,4,2,5,3,2,4,1]
                  }

        ]
      }
       const Chartu = {
        chart: {
          type:"pie"
        },
        title:{
            text:"By device"
        },
        tooltip: {
            valueSuffix: '%'
        },
        credits:{
            enabled:false
        },
        series: 
        [
            {
                name:"percentage",
                colorByPoint: true,
          data: 
          [{name:"mobile",y:72,color:"red"},
          {name:"laptop",y:12,color:"yellow"},
          {name:"Tablet",y:22,color:"green"}]
            },
            
        ]
      }
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-8 col-md-6 col-sm-12 linechart me-4 p-3'>
                    <div>
                       
                        <div>
                            <input type="date" name="stat" id="" placeholder='Start date'/>
                            <input type="date" name="end" id="" placeholder='End date' />
                        </div>
                    <HighchartsReact
                        highcharts={Highcharts}
                          options={optionsnew}
                       />

                    </div>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 piechart p-3'>
                    <div>                  
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={Chartu}
                       />
                        </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Dashchart