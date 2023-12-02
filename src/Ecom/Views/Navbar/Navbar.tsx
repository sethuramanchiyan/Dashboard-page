import React from 'react'
import { Link } from 'react-router-dom';
import '/Typescript/react-typescript-demo/src/Ecom/Assets/CSS/Nav.css'

function Navbar() {
  return (
    <div>
        <div className='container-fluid'>
            <nav className='row navi d-flex p-3'>
                <div className='col-lg-9 col-sm-12'>
                    <ul className='d-flex'>
                        <li className='mx-2'>Buy T-Shirts</li>
                        <li className='mx-2'><Link to="/Men">Men</Link></li>
                        <li className='mx-2'><Link to="/Women">Women</Link></li>
                        <li className='mx-2'><Link to="/About">About</Link></li>
                        <li className='mx-2'><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='col-lg-3 col-sm-12'><h3>T-Shirts</h3></div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar