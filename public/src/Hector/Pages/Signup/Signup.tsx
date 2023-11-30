import React from 'react';
import '/Typescript/react-typescript-demo/src/Hector/CSS/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from '../Home/Home';


  interface SignupProps {
    onSignup:() => void;
  }
  const Signup:React.FC<SignupProps>=({onSignup}) => 

  {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    
          const handleSignup = () => {

            if (email === 'email' && password === 'password') {
              onSignup();
            } else {
              setError('Invalid credentials');
            }
          };
     
          
  return (
    <div>
        
        <nav className='container'>
              <div className='row p-5'>
                  <div className='d-flex justify-content-between'>
                    <div><img src="./images/hector/hectornav.png" alt="hector" /></div>
                    <div><button className='sign'>SIGN IN</button></div>
                  </div>
              </div>
        </nav>
        <div className='validate container'>
         <div className='started text-center p-5 m-5'>
          {/* <form action="" method=''> */}
            <h1 className=''>Let's Get Started!</h1>
            <h6>Full Name</h6>
            <input type="text" name='name'  /><br />
            <h6>Email</h6>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required/><br />
            <h6>Contact</h6>
            <input type="number" name='number'  /><br />
            <h6>Password</h6>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br />
                <div className='text-end'>
                     <input type="checkbox" /><span>Remember me</span>
                 </div>
                 <button className='bigsign px-5' onClick={handleSignup} type='submit'>SIGN UP</button>
                 {error && <p style={{ color: 'red' }}>{error}</p>}
                 <div className='d-flex  justify-content-center'>
                    <input type="checkbox" /><p className="accept">Accept out <span className='terms'>Terms & Conditions</span></p>
                 </div>
                 {/* </form> */}
        </div>
        </div>
    </div>
  )
    }
    export default Signup;
