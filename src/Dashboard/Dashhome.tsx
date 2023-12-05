import React from 'react';
import './Assets/CSS/Dashhome.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretUp,faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Dashhome = () => {
     
  return (
    <div>
        <div className='container-fluid'>
            <div className='row home p-3 mb-3'>
                <div className='col-lg-2 col-md-4 col-sm-6 box text-center'>
                     <p>Posts</p>
                     <h4>2980</h4>
                     <p className='green'><FontAwesomeIcon icon={faCaretUp} />6.7%</p>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 box text-center'>
                     <p>Pages</p>
                     <h4>650</h4>
                     <p className='green'><FontAwesomeIcon icon={faCaretUp} />5.7%</p>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 box text-center'>
                     <p>Comments</p>
                     <h4>1070</h4>
                     <p className='red'><FontAwesomeIcon icon={faCaretDown} />4.2%</p>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 box text-center'>
                     <p>Customers</p>
                     <h4>4055</h4>
                     <p className='red'><FontAwesomeIcon icon={faCaretDown} />2.2%</p>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 box text-center'>
                     <p>Subscribers</p>
                     <h4>7050</h4>
                     <p className='red'><FontAwesomeIcon icon={faCaretDown} />3.2%</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashhome