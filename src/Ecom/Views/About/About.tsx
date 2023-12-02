import React from 'react';
import grouptshirt from '../../Assets/Images/grouptshirt.jpg'
import '../../Assets/CSS/About.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div>
        <Navbar />
        <div className='text-center container p-4'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1 className='text-center'>About</h1>
                    <p className='fw-bold'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='group'>
                <img src={grouptshirt} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About