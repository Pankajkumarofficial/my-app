import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // BrowserRouter,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <BrowserRouter basename='/my-app'> */}
          <Routes>
            <Route exact path='/' element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
            <Route exact path="/my-app" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>   
            <Route exact path="/about" element = {<About />}/>
          </Routes>
          {/* </BrowserRouter> */}
        </div>
      </Router>
    </>
  );
}

export default App;
