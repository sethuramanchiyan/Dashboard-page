import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from '../Signup/Signup';
import '/Typescript/react-typescript-demo/src/Hector/CSS/Welcome.css';

export default function Welcome() {
  return (
    <div>
        <div className='container'>
            <div className='row  p-4'>
              <div className='d-flex justify-content-between'>
                    <div>
                         <img src="./images/hector/hectornav.png" alt="hector" />
    
                    </div>
                    <div>

                            <button className='signup p-2 px-5'>
                              <Link to="/Signup">Signup</Link>
                            </button>
                    </div>
                </div>
      
      </div>

        </div>
        <div>
            <h1 className='text-center p-5'>Welcome to Hector !</h1>
            <div className='text-center'>
              <button className='signup p-2 px-5'>
                  <Link to="/Signup" className='text-center'>Signup</Link>
              </button>
            </div>
       
         </div>

       

    </div>
  )
}
