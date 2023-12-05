import React from 'react';
import './Assets/CSS/Dashnav.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Dashsidebar from './Dashsidebar';

const Dashboardnav = () => {
  return (
    <div>
        <div className='container-fluid p-3 Dashnavi'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 navinput d-flex'>
                    <FontAwesomeIcon icon={faBars} className='mx-3 Bar'/>  
                    <input type="text" placeholder='Search for something' />
                </div>
            </div>
        </div>
        <Dashsidebar />
    </div>
  )
}

export default Dashboardnav