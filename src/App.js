import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Stack from './Components/Stack';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='nav-bar-not-included'>
        <Landing />
        <About />
        <Projects />
        <Stack />
      </div>

    </div>
  );
}

export default App;
