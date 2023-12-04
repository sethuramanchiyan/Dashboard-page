import React from 'react';
import './Assets/CSS/Dashnav.css';

const Dashboardnav = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <nav className='col-lg-9 col-sm-9 px-5'>
                    <input type="text" placeholder='Search for something' />

                </nav>

            </div>

        </div>
    </div>
  )
}

export default Dashboardnav