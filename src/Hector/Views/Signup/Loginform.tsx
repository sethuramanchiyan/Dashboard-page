import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Typescript/react-typescript-demo/src/Hector/Assets/CSS/Loginform.css';

const Loginform = () => {

    const navigate =useNavigate();

    const[input,setInput]=useState({
        email :'',
        password :''
    });
    const handleLogin = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
        if(input.email === loggedUser.email && input.password === loggedUser.password)
        {
            navigate("/Home");
        }
        else
        {
            alert("Wrong email or password");
        }
    }
  return (
    <div>
        <div className='Loginform p-5 lh-lg text-center'>
            <div className='logindata p-5'>
                 <form action="" onSubmit={handleLogin}>
                 <h3 className='text-center'>SIGN IN</h3><br />
                 <label htmlFor="">Email</label><br />
                 <input type="email" name='email' id='formvalid' placeholder='email' value={input.email} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})} required/><br />
                 <label htmlFor="">Password</label><br />
                 <input type="password" name='password' id='formvalid' placeholder='password' value={input.password} onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}required/><br />
                 <button type='submit' className='my-4 signin'>SIGN IN</button><br />
                 <Link to="/">Register here</Link>
                 </form>
            </div>
        </div>
    </div>
  )
}

export default Loginform