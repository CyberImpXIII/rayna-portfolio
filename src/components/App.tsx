import '../styles/App.css';
import Header from './Header';
import Nav from './Nav';
import QuickNav from './QuickNav';
import ContentContainer from './ContentContainer';
import {useState, useEffect} from 'react'
import data from '../interfaces/data'
import defaultData from '../defaultData';
import quickNavProps from '../interfaces/QuickNavProps';

const App=()=>{
  const [active, setActive] = useState<string>('symposia')
  const [data, setData] = useState<data>(defaultData)
  const [navData, setNavData] = useState<quickNavProps>(
    {
      title:"Symposia",
      content:`Hotel identity exploration, 2021
      See more →`,
      url:'symposia'
    }
    )
  const [url, setUrl] = useState<string>(document.URL)

  useEffect(()=>{
    for (let i =0; i < data.navItems.length ; i++){
      if(data.navItems[i].navItemLink === active){
        setNavData({
          title:data.navItems[i].navItemName,
          content:data.navItems[i].navItemPageContent,
          url:data.navItems[i].navItemLink
        })
      }
    }
  },[active, data.navItems])
  return (
    <div className="App">
        <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
        <Header setUrl={setUrl}/>
        <Nav url={url} setUrl={setUrl} />
        <QuickNav title={navData.title} content={navData.content} url={navData.url}/>
        <ContentContainer data={data} active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
