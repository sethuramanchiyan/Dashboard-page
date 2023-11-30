import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHouse,faUser } from '@fortawesome/free-solid-svg-icons';
import '/Typescript/react-typescript-demo/src/Hector/CSS/Sidebar.css';

export default function Sidebar() {
  return (
    <div className='Sidebar d-flex'>
        <div className='Homebar'>
            <img src="./images/hector/H.png" alt="H" className='my-4 p-2'/>
            <ul className="lh-lg p-3 mt-5">
                <li><FontAwesomeIcon icon={faBars} /></li>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li><FontAwesomeIcon icon={faUser} /></li>
            </ul>
        </div>
        <div className='Menubar ms-5 lh-lg'>
            <ul>
                <li>Menu</li>
                <li>Home</li>
                <li>User</li>
            </ul>
        </div>
    </div>
  )
}
