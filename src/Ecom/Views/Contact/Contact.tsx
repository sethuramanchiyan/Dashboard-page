import React from 'react'
import Navbar from '../Navbar/Navbar';
import '../../Assets/CSS/Contact.css'
import Map from './Map';
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <div>
        <Navbar />
        <div className='container py-5'>
            <div className='row text-center'>
                <div>
                    <h1>Contact</h1>
                    <p><b>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</b></p>

                </div>

            </div>

        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 contactadd p-5'>
                    <div>
                        <h2>GET IN TOUCH</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
                        <address>92/77,Palanganatham,Madurai</address>
                        <p>Contact@gmail.com</p>
                    </div>

                </div>
                <div className='col-lg-6 lh-lg contactname p-5'>
                    <div>
                        <div>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>   
                        <div className='my-3'>
                            <input type="email" placeholder='Your Email Address'/>
                        </div> 
                        <textarea name="" id="" className="30" placeholder='Type message'></textarea> <br />
                        <button className='bg-dark font-white px-3'>Send</button>                 
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Map />
        </div>
        <div>
            <Footer />
        </div>
        
    </div>
  )
}

export default Contact