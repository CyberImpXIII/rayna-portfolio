import '../styles/App.css';
import Header from './Header';
import Nav from './Nav';
import QuickNav from './QuickNav';
import ContentContainer from './ContentContainer';
import {useState, useEffect} from 'react'
import data from '../interfaces/data'
import defaultData from '../defaultData';

interface Project{
  name:string,
  pageCopy: string,
  projectCopy: string,
  doesLink: boolean,
  link?: string,
  linkCopy?:string
}


const App=()=>{
  const [active, setActive] = useState<string>('symposia')
  const [data, setData] = useState<data>(defaultData)
//   useEffect(()=>{
//     let interval = setInterval(()=>{
//         let active:(string | undefined) = 'unset'
//             for(let i = 0; i <  Number(ref.current?.children.length); i++){
//                 let rect = ref.current?.children[i].children[0].getBoundingClientRect()
//                 if(rect && rect?.top < window.innerHeight && rect?.top + 150 < window.innerHeight){
//                     active = i.toString()
//                 } 
//             }
//             console.log(active)
//     },500)
//     return (()=>{clearInterval(interval)})
// },[])

  const [url, setUrl] = useState<string>(document.URL)
  const [projects, setProjects]=useState<Project[]>([{
    name:'Farmshelf',
    pageCopy: `Senior Graphic Designer, 2019-2020`,
    projectCopy:'',
    doesLink:true,
    link:'/farmshelf',
    linkCopy:'See more →'
  }])
  return (
    <div className="App">
        <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
        <Header setUrl={setUrl}/>
        <Nav url={url} setUrl={setUrl} />
        <QuickNav/>
        <ContentContainer data={data} setActive={setActive}/>
    </div>
  );
}

export default App;
