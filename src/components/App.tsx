import Header from './Header';
import Nav from './Nav';

import ContentContainer from './ContentContainer';
import {useState, useEffect} from 'react'
import data from '../interfaces/data'
import defaultData from '../defaultData';
import quickNavProps from '../interfaces/dropdownProps';
import axios from 'axios'
import navItem from '../interfaces/navItem'
import Project from '../interfaces/project'

const App=()=>{
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);
  const [active, setActive] = useState<string>('symposia')
  const [data, setData] = useState<data>(defaultData)
  const [navData, setNavData] = useState<quickNavProps>(
    {
      dropDownActive:false,
      setDropDownActive:setDropDownActive,
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

  useEffect(()=>{
    let dataProject:data = {
      pages:[],
      projects:[],
      navItems:[]
    };


  (async ()=>{    
      let rawNavItems =  await axios.get('https://mejlta66.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27navItem%27%5D%0A&perspective=published');
      let newRawNavItems = rawNavItems.data.result;
      let newNavItems:navItem[] = [
      {
        navItemName:"Symposia",
        navItemPageContent:`Hotel identity exploration, 2021
        See more →`,
        project:'symposia',
        position:0,
        navItemLink:'symposia'
      }
    ]
    newRawNavItems.forEach((navItem:any)=>{
      newNavItems.push({
        navItemName:navItem.title,
        navItemPageContent:navItem.content,
        navItemLink:navItem.link,
        position:navItem.position,
        project:navItem.project
      })
    })
    newNavItems.shift();
    newNavItems.sort(({position:a}, {position:b}) => a-b)
    dataProject.navItems = newNavItems;

      let rawProjects =  await axios.get('https://mejlta66.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27project%27%5D%7B%0A++title%2C%0A++++content%2C%0A++++link%2C%0A++++images%5B%5D%7B%0A%0A++++++%27url%27%3Aimage.asset-%3E%7Burl%7D%2C%0A++++++alt%0A%0A++++%7D%0A%7D%0A&perspective=published');
      let newRawProjects = rawProjects.data.result;
      let newProjects:Project[] = [{
        projectName:'test',
        projectLink:'test',
        dropdownContent:'',
        projectImages:[{
          image: 'string',
          alt: 'string'
        }]
      }]
      newRawProjects.forEach((project:any)=>{
        let imagetemp = [{
          image: 'string',
          alt: 'string'
        }]
        project.images.forEach((image:any)=>{
          imagetemp.push({
            image:image.url.url,
            alt:image.alt
          })
        })
        imagetemp.shift();
        newProjects.push({
          projectName:project.title,
          dropdownContent:project.content,
          projectLink:project.link,
          projectImages:imagetemp
        })
      })
      newProjects.shift()
      dataProject.projects = newProjects

      let rawPages =  await axios.get('https://mejlta66.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27page%27%5D%7B%0A++name%2C%0A++images%5B%5D%7B%0A++++%27image%27%3Aimage.asset-%3E%7Burl%7D%2C%0A++++%27video%27%3Avideo.asset-%3E%7Burl%7D%2C%0A++++alt%2C%0A++++link%2C%0A++++project%0A++%7D%0A%7D&perspective=published');
      let newRawPages = rawPages.data.result;
      let newPages:any[] = [{
        projectName:'test',
        pageImages:[{
          image: 'string',
          link: 'string',
          alt: 'string',
          project:'string'
        }]
      }]
      newRawPages.forEach((page:any)=>{
        let imagetemp = [{
          image: 'string',
          link: 'string',
          alt: 'string',
          project:'string'
        }]
        page.images.forEach((image:any)=>{
          imagetemp.push({
            image: image.image === null ? image.video.url : image.image.url,
            link: image.link === null ? '' : image.link,
            alt: image.alt,
            project:image.project
          })
        })
        imagetemp.shift();
        newPages.push({
          pageName:page.name,
          pageImages:imagetemp
        })
      })
      newPages.shift()
      dataProject.pages = newPages
      setData({
        pages:newPages,
        projects:newProjects,
        navItems:newNavItems
      })
      return true;
  })()
},[])

  return (
    <div className="App">
        <link rel="stylesheet" href="https://use.typekit.net/cdp3qbe.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
        <Header mobileNavActive={mobileNavActive} setMobileNavActive={setMobileNavActive} setUrl={setUrl}/>
        <Nav noDropDown={noDropDown} setNoDropDown={setNoDropDown} setAboutActive={setAboutActive} aboutActive={aboutActive} setMobileNavActive={setMobileNavActive} mobileNavActive={mobileNavActive} url={url} setUrl={setUrl} />
        <ContentContainer 
          setDropDownActive={setDropDownActive}
          dropDownActive={dropDownActive}
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
