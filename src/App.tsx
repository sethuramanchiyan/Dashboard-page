import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Dashboardnav from './Dashboard/Dashboardnav';
// import Dashsidebar from './Dashboard/Dashsidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tshirts from './Ecom/Views/Tshirts/Tshirts'
import Landing from './Ecom/Views/Landingpage/Landing';
import Men from './Ecom/Views/Men/Men';
import Women from './Ecom/Views/Women/Women';
import About from './Ecom/Views/About/About';
import Contact from './Ecom/Views/Contact/Contact';

// import Welcome from './Hector/Views/Welcome/Welcome';
// import Register from './Hector/Views/Signup/Register';
// import Loginform from './Hector/Views/Signup/Loginform';
// import Home from './Hector/Views/Home/Home';
// import Tablehome from './Hector/Views/TablePage/Tablehome';


function App() {
  return (
    <div className="App ">
      {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} /> 
            <Route path='/Register' element={<Register  />} />
            <Route path='/Loginform' element={<Loginform  />} />
            <Route path='/Home' element={<Home />} /> 
            <Route path='/Tablehome' element={<Tablehome />} />
          </Routes>        
      </BrowserRouter>  */}
      <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Landing />}/>
                  <Route path='/Tshirts' element={<Tshirts />}/>
                  <Route path='/Men' element={<Men />}/>
                  <Route path='/Women' element={<Women />}/>
                  <Route path='/About' element={<About />}/>
                  <Route path='/Contact' element={<Contact />}/>


            </Routes>
      </BrowserRouter>
{/*    
    <Dashsidebar />
    <Dashboardnav /> */}

    </div>

  );
}

export default App;
