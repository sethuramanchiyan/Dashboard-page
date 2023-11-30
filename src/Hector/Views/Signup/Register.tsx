import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Typescript/react-typescript-demo/src/Hector/Assets/CSS/Register.css';


const Register = () => {

    const navigate =useNavigate();

    const[input,setInput]=useState({
        username :'',
        email :'',
        number :'',
        password :''
    });
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/Loginform");
    }
  return (
    <div>
         <div className='container'>
            <div className='row  p-4'>
              <div className='d-flex justify-content-between align-items-center'>
                    <div>
                         <img src="./images/hector/hectornav.png" alt="hector" />
    
                    </div>
                    <div className='d-flex'>
                      <p>Already a member?</p>

                      <button className='signup p-2 px-5 mx-3' onClick={handleSubmit}>
                        SIGN IN
                      </button>
                    </div>
          </div>
          </div>
        <div className='Registerform m-5 lh-lg text-center '>
            <div className=' Registerdata p-4'>
            <form action="" onSubmit={handleSubmit} className='m-4'>
            <h4 className='text-center fw-bold'>Let's Get Started!</h4>
            <label htmlFor="">Username</label><br />
            <input type="text" name='username' id='formvalid' placeholder='username' value={input.username} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})} required/><br />
            <label htmlFor="">Email</label><br />
            <input type="email" name='email' id='formvalid' placeholder='email' value={input.email} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})} required/><br />
            <label htmlFor="">Contact number</label><br />
            <input type="number" name='number' id='formvalid' placeholder='Phone number' value={input.number} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}required /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" name='password' id='formvalid' placeholder='Minimum 8 Characters' value={input.password} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}required/><br />
            <div className=''><input type="checkbox" name="" id="" /><p>Remember me</p></div>
            
            <button type='submit' className='my-3 signup'>SIGN UP</button>
            
            </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register