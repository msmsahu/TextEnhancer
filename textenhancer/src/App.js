import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      
        setAlert(null)
      
    }, 2000);

  }
  const toggleMode = () =>{
    if(mode ==="light")
      {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode enabled","Success");
        
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = '#ffffff';
        showAlert("Light mode enabled","Success");
        
      }

  }
  
  return (
    <div>
    <BrowserRouter>
    <Navbar title="Rich Text Editor" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <Routes>
      <Route path="about" element={<About />} />
        <Route exact path="/" element={<TextForm  mode={mode} showAlert={showAlert}/>}/>
          
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
