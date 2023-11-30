import React from 'react';
import Tablehome from '../TablePage/Tablehome';
import { Link} from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '/Typescript/react-typescript-demo/src/Hector/Assets/CSS/Chart.css';

const options = {
    chart:{
        type: 'column'
    },
    title:{
         text:'Hector Chart'
    },
   yAxis:{
    title:{
        text: "Views Per Minute"
    },
    categories:['2T','4T','6T','8T','10T','12T','14T','16T','18T','20T','22T']

   },
   xAxis :{
    title:{
        text:"Time Spent"
    },
    max:30,

   },
   tooltip :{
    sharped : true,
    backgroundColor: 'blue',
    style : {
        color :'blue'
    }
   },
    
    series: [
        {
      data: [3,2,4,2,6,4,4,6,5,4,1,1,3,6,2,5,6,5,4,9,6,6,7,9,8,6,7,8,5,7,10,4]
    },
   
    
]
  }

export default function Chart() {
  return (
    <div className='verticalChart '>
      <div className='container Chart m-3 p-2'>
          <div className='row'>
              <div className='col-lg-12'>
                  <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                  />
              </div>
          </div>
      </div>
      <Link to="/Tablehome" className='text-center align-items-center'>Next</Link>
    </div>
  )
}
