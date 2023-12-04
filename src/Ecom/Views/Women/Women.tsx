import React from 'react'
import { useState } from 'react'
import womendress1 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress1.jpg'
import womendress2 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress2.jpg'
import womendress3 from '/Typescript/react-typescript-demo/src/Ecom/Assets/Images/womendress3.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Women() {
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
        <div className='container'>
            <div className='row py-5'>
                <div className='col-lg-4'>
                <img src={womendress1} alt="Men dress1" />
                    <h5>T-Shirt Name 50</h5>
                    <h6>450rs</h6>  
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*450}</p>  
                </div>
                <div className='col-lg-4'>
                <img src={womendress2} alt="Men dress1" />
                    <h5>T-Shirt Name 60</h5>
                    <h6>400rs</h6> 
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*400}</p>   
                </div>
                <div className='col-lg-4'>
                <img src={womendress3} alt="Men dress1" />
                    <h5>T-Shirt Name 70</h5>
                    <h6>550rs</h6>
                    <button onClick={handleAdd}>Add to cart</button>
                      <button onClick={handleSub}>Add to remove</button>
                      <p>Proceed to buy {count} item</p>
                      <p>Price list is {count*550}</p>    
                </div>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Women