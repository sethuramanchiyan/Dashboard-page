import React from 'react'
import womendress1 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress1.jpg'
import womendress2 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress2.jpg'
import womendress3 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress3.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Women() {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row py-5'>
                <div className='col-lg-4'>
                <img src={womendress1} alt="Men dress1" />
                    <h5>T-Shirt Name 50</h5>
                    <h6>450rs</h6>    
                </div>
                <div className='col-lg-4'>
                <img src={womendress2} alt="Men dress1" />
                    <h5>T-Shirt Name 60</h5>
                    <h6>400rs</h6>    
                </div>
                <div className='col-lg-4'>
                <img src={womendress3} alt="Men dress1" />
                    <h5>T-Shirt Name 70</h5>
                    <h6>550rs</h6>    
                </div>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Women