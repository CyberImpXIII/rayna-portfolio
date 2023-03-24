import Header from './Header';
import Nav from './Nav';

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
      project:'symposia',
      link:'symposia'
    }
    )
  const [url, setUrl] = useState<string>(document.URL)
  const [mobileNavActive, setMobileNavActive] = useState<boolean>(false);
  const [aboutActive, setAboutActive] = useState(window.location.href.includes('about'));
  const [noDropDown, setNoDropDown] = useState(window.location.href.includes('illustration') || window.location.href.includes('about'))

  useEffect(()=>{
    for (let i =0; i < data.navItems.length ; i++){
      if(data.navItems[i].project === active){
        setNavData({
          title:data.navItems[i].navItemName,
          content:data.navItems[i].navItemPageContent,
          link:data.navItems[i].navItemLink,
          project:data.navItems[i].project
        })
        return;
      }
    }
    setNavData({
      ...navData,
      content:''
    })
  },[active, data.navItems])

  return (
    <div className="App">
        <link rel="stylesheet" href="https://use.typekit.net/cdp3qbe.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
        <Header mobileNavActive={mobileNavActive} setMobileNavActive={setMobileNavActive} setUrl={setUrl}/>
        <Nav noDropDown={noDropDown} setNoDropDown={setNoDropDown} setAboutActive={setAboutActive} aboutActive={aboutActive} setMobileNavActive={setMobileNavActive} mobileNavActive={mobileNavActive} url={url} setUrl={setUrl} />
        <ContentContainer 
          noDropDown={noDropDown} 
          title={navData.title} 
          content={navData.content} 
          link={navData.link}
          aboutActive={aboutActive} 
          data={data} 
          active={active} 
          setActive={setActive}/>
    </div>
  );
}

export default App;
