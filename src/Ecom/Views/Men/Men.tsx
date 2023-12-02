import React from 'react'
import { Link } from 'react-router-dom'
import Mendress1 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress1.jpg'
import Mendress2 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress2.jpg'
import Mendress3 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress3.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Men() {
  return (
    <div>
        <Navbar />
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-4 '>
                    <Link to={}>
                    <img src={Mendress1} alt="Men dress1" />
                    </Link>
                    <h5>T-Shirt Name 10</h5>
                    <h6>300rs</h6>

                </div>
                <div className='col-lg-4'>
                    <img src={Mendress2} alt="Men dress1" />
                    <h5>T-Shirt Name 20</h5>
                    <h6>350rs</h6>
                </div>
                <div className='col-lg-4'>
                    <img src={Mendress3} alt="Men dress1" />
                    <h5>T-Shirt Name 40</h5>
                    <h6>450rs</h6>
                </div>


            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Men