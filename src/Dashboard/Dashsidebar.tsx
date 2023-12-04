import React from 'react';
import './Assets/CSS/Dashsidebar.css'

const Dashsidebar = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='side col-lg-3 col-sm-3'>
                  <ul className='lh-lg '>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>Signup</li>
                    <li>Login</li>
                  </ul>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Dashsidebar