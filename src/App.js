
import './App.css';
import CurrentStatus from './components/CurrentStatus';
import CityStatus from './components/CityStatus'
import React,{useState} from 'react'; 

function App() {
  return (
    <div className='container' >
      <header className='header'>Weather
      </header>
      <CityStatus/>
      <CurrentStatus/>
    </div>
  );
}

export default App;
