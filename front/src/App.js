import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Employee from './pages/Employee';
import List from './pages/List';
import HR from './pages/HR' ;
import Editemployee from './pages/Editemployee';
import Hrlist from './pages/Hrlist';
import Edithr from './pages/Edithr';
import Location from './pages/Location';
import Locationlist from './pages/Locationlist';
import Editlocation from './pages/Editlocation';


function App() {
// const [message, setMessage] = useState("");

// useEffect(()=>{
//   fetch("http://localhost:8000/message")
//   .then((res)=>res.json())
//   .then((data)=> setMessage(data.message))
// },[]);

  return (
    <div>
      {/* {message} */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="Employee" element={<Employee/>}/>
        <Route path="List" element={<List/>}/>
        <Route path="Edit" element={<Editemployee/>}/>
        <Route path="HR" element={<HR/>}/>
        <Route path="hrdata" element={<Hrlist/>}/>
        <Route path="Edithr" element={<Edithr/>}/>
        <Route path="Location" element={<Location/>}/>
        <Route path="locationdata" element={<Locationlist/>}/>
        <Route path="Editlocation" element={<Editlocation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
