import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Welcome from './Hector/Pages/Welcome/Welcome';
import Signup from './Hector/Pages/Signup/Signup';
import Home from './Hector/Pages/Home/Home';
import Tablehome from './Hector/Pages/TablePage/Tablehome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} /> 
            <Route path='/Signup' element={<Signup onSignup={Home} />} /> 
            <Route path='/Home' element={<Home />} /> 
            <Route path='/Tablehome' element={<Tablehome />} />
          </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
