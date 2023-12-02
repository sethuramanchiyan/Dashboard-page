import React from 'react'
import '/Typescript/react-typescript-demo/src/Ecom/Assets/CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div>
        <div className='container foot  py-5 my-5'>
            <div className='row lh-lg'>
                <div className='col-lg-12 text-center'>
                    <h4>Subscribe To Get Offers In Your Inbox</h4>
                    <input type="text" placeholder='enter your mail' />
                    <input type="submit" name='subscribe' />
                </div>
                <div className='col-lg-12'>
                    <h4>Contact</h4>
                    <div>
                    {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                    </div>

                </div>

            </div>

        </div>
        <div className='container-fluid bg-dark text-white py-5'>
            <div className='row footdown text-center'>
                <div className='col-lg-9'>
                    <p className='fs-5'> Copyright &#169; 2023-T Shirts store|Powered by T-Shirts Store</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer