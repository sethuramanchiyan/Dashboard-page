import React from 'react'
import { useNavigate } from 'react-router-dom';
import Women from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/woman.png'
import '/Typescript/react-typescript-demo/src/Ecom/Assets/CSS/Landing.css';
import Tshirts from '../Tshirts/Tshirts';

function Landing() {
    const navigae=useNavigate();

    function getStart()
    {
        navigae("/Tshirts")
    }
  return (
    <div>
        <div className='container-fluid landing'>
            <div className='row'>
                <div className='col-6'>
                    <img src={Women} alt="Women" />
                </div>
                <div className='col-6 start'>
                    <div className='py-5 lh-lg'>
                        <h1>GET START</h1>
                        <h2>
                            YOUR FAVOURITE SHOPPING
                        </h2>
                        <button className='butt px-3' onClick={getStart}>GET START</button>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Landing