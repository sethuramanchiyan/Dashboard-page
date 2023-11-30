import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Welcome from './Hector/Views/Welcome/Welcome';
import Register from './Hector/Views/Signup/Register';
import Loginform from './Hector/Views/Signup/Loginform';
import Home from './Hector/Views/Home/Home';
import Tablehome from './Hector/Views/TablePage/Tablehome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} /> 
            <Route path='/Register' element={<Register  />} />
            <Route path='/Loginform' element={<Loginform  />} />
            <Route path='/Home' element={<Home />} /> 
            <Route path='/Tablehome' element={<Tablehome />} />
          </Routes>        
      </BrowserRouter>

    </div>

  );
}

export default App;
