import '../styles/Navigation.css'
import {Link} from 'react-router-dom'


interface Navprops {
  url:string,
  setUrl:Function,
  mobileNavActive:boolean, 
  setMobileNavActive:Function,
  aboutActive:boolean,
  setAboutActive:Function,
  setNoDropDown:Function,
  noDropDown:boolean
}

interface Option {
  title:string,
  color:string,
  destination:string
}


const Nav = ({noDropDown, setNoDropDown, aboutActive, setAboutActive, url, setUrl, mobileNavActive, setMobileNavActive}:Navprops)=>{

  const navOptions = [{title:'Print', color: '#CC3FB6', destination:'print'},
    {title:'Digital', color: '#F58514', destination:'digital'},
    {title:'Spaces', color: '#31A00F', destination:'space'},
    {title:'Illustration', color: '#E6BE38', destination:'illustration'},
    {title:'About', color: '#0A70D5', destination:'about'}]

    const navHandler = (option:Option, aboutActive:boolean, setAboutActive:Function)=>{
      setUrl(option.title); 
      setMobileNavActive(false);
      if(option.title === 'About' || option.title === 'Illustration'){
        setNoDropDown(true)
      }else{
        if(noDropDown){
          setNoDropDown(false)
        }
      }
      if(option.title === 'About'){
        setAboutActive(true);
      }else{
        if(aboutActive){
          setAboutActive(false)
        }
      }
    }

  return(
    <nav className={`navigation`}>
      <style>
        {`
        :root{
          --mobileNavHeight:${navOptions.length*13}vw
        }
        `}
      </style>
    <div className='navrainbows'>
      <div className='leftnavrainbow'>
      </div>
      <div className='rightnavrainbow'>
      </div>
    </div>
    <div className={`navoptions ${mobileNavActive && 'mobileNavActive'}`}>
      {navOptions.map((option)=>(
        <Link key={`${option.title}NavOption`} to={option.destination} onClick={()=>{navHandler(option, aboutActive, setAboutActive)}}>
          <div style={url.toLowerCase().includes(option.title.toLocaleLowerCase())?{backgroundColor:'black'}: {backgroundColor:option.color}} className='option title'>
          {option.title}
          </div>
        </Link>
      ))}
    </div>
  </nav> 
)}

export default Nav