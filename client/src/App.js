import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import GivePage from './pages/GiveAppointment';
import Homepage from './pages/Homepage';
import GetPage from './pages/GetAppointment';
import InviterPage from './pages/InviterPage';
import './pages/register.css';
import './pages/giveAppointment.css';
import './pages/homepage.css';
import './pages/getAppointment.css';
import './components/listItems.css';
import './components/dropdown.css';
import './pages/inviterPage.css';
import './components/selectDropdown.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/givepage" element={<GivePage/>}/>
      <Route path="/getpage" element={<GetPage/>}/>
      <Route path="/inviter/:id" element={<InviterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
