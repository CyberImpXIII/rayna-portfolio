import React from 'react';
import './App.css';

function App() {
  const navoptions: { 
    title: string; 
    destination: string;
    color: string;
  }[] = [
    {title:'wideblock', destination:'./', color:'#CC3FB6'},
    {title:'wideblock', destination:'./', color:'#F58514'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className='wideblock black title'>RW
          </div>
        <div className='headerrainbow'></div>
      </header>
      <nav className='navigation'>
        <div className='navrainbows'>
          <div className='leftnavrainbow'>
          </div>
          <div className='rightnavrainbow'>
          </div>
        </div>
        <div className='navoptions'>
          {navoptions.map((option)=>(
            <a href={option.destination}><div style={{backgroundColor:option.color}} className='option title'>{option.title}</div></a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
