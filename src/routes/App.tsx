import React from 'react';
import '../styles/App.css';
import QuickNavOptionInterface from '../interfaces/quicknavoptioninterface';
import NavOptionsInterface from '../interfaces/navoptionsinterface';

function App() {
  const navoptions: NavOptionsInterface[] = [
    {title:'wideblock', destination:'./', color:'#CC3FB6'},
    {title:'wideblock', destination:'./', color:'#F58514'}
  ]
  let quicknavoptions: QuickNavOptionInterface[] = [
    {title:'wideblock', destination:'./'},
    {title:'wideblock', destination:'./'}
  ]

  return (
    <div className="App">
      <div className='quicknav'>
        {quicknavoptions.map((option)=>(
          <div className='quicknavoption'></div>
        ))}
        <div className='quicknavbutton'></div>
      </div>
    </div>
  );
}

export default App;
