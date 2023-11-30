import React, { useState } from 'react';
import Signup from './Signup';
import Home from '../Home/Home';

const Sign = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const handleSignup = () => {
    setIsSignup(true);
  };

  return (
    <div>
      {isSignup ? (
        
        <Home />
      ) : (
        <Signup onSignup={handleSignup} />
      )}
    </div>
  );
};

export default Sign;