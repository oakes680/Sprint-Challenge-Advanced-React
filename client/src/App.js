import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Players'
import Chart from './components/Chart'
import CardFlip from './components/CardFlip'

function App() {
  return (
    <div className="App">
      <p>World Cup</p>
      
      <div className='hi'>
      <Chart/>
      </div>
      <Player/>
    </div>
  );
}

export default App;
