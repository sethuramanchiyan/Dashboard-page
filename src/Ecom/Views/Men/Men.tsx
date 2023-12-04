import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mendress1 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress1.jpg'
import Mendress2 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress2.jpg'
import Mendress3 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/Mendress3.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Men() {
    const[count,setCount]=useState(1);

    function handleAdd(){
        setCount((c)=>(c+1));
    }
    function handleSub(){
        setCount((c)=>(c-1));
    }
  return (
    <div>
        <Navbar />
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-4 '>                   
                    <img src={Mendress1} alt="Men dress1" />                    
                    <h5>T-Shirt Name 10</h5>
                    <h6>300rs</h6>
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*300}</p>
                </div>
                <div className='col-lg-4'>
                    <img src={Mendress2} alt="Men dress1" />
                    <h5>T-Shirt Name 20</h5>
                    <h6>350rs</h6>
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*350}</p>
                </div>
                <div className='col-lg-4'>
                    <img src={Mendress3} alt="Men dress1" />
                    <h5>T-Shirt Name 40</h5>
                    <h6>450rs</h6>
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*450}</p>
                </div>


            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Men