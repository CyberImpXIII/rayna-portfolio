import { useEffect, useState } from 'react';
import ContentContainerProps from '../interfaces/ContentContainerProps';
import Page from './pages/Page';

const App=(props:ContentContainerProps)=>{

  return (
    <div className="App">
        <Page active={props.active} pageName={'home'} setActive={props.setActive} images={[]}/>
    </div>
  );
}

export default App;
