import '../styles/App.css';
import ContentContainerProps from '../interfaces/ContentContainerProps';
import Page from './pages/Page';

const App=(props:ContentContainerProps)=>{

  return (
    <div className="App">
      {props.data.pages.map((page)=>(
        <Page pageName={page.pageName} setActive={props.setActive} images={page.pageImages}/>
      ))}
    </div>
  );
}

export default App;
