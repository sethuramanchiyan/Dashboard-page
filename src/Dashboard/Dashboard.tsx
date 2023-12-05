import React from 'react';
import Dashboardnav from './Dashboardnav';
import Dashhome from './Dashhome';
import Dashchart from './Dashchart'

function Dashboard() {
  return (
    <div>
         <div>
             <Dashboardnav />
             <Dashhome />
             <Dashchart />
        </div>
    </div>
  )
}

export default Dashboard