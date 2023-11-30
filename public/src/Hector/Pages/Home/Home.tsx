import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Chart from './Chart';

 
export default function Home() {
  return (
    <div className= ''>

        <Navbar />
        <div className='d-flex'>
            <Sidebar />
            <Chart />
        </div>   
    </div>
  )
}
