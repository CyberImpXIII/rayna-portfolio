import { useState, useEffect } from "react"
import NavOptionsInterface from "../interfaces/navoptionsinterface"
import '../styles/Navigation.css'
import {Link} from 'react-router-dom'


interface Navprops {
  url:string,
  setUrl:Function
}

const Nav = (props:Navprops)=>{

  const [navOptions, setNavOptions] = useState<NavOptionsInterface[]>(
    [{title:'Print', color: '#CC3FB6', destination:'print'},
    {title:'Digital', color: '#F58514', destination:'digital'},
    {title:'Spaces', color: '#31A00F', destination:'space'},
    {title:'Illustration', color: '#E6BE38', destination:'illustration'},
    {title:'About', color: '#0A70D5', destination:'about'}]
    )

  return(
    <nav className='navigation'>
    <div className='navrainbows'>
      <div className='leftnavrainbow'>
      </div>
      <div className='rightnavrainbow'>
      </div>
    </div>
    <div className='navoptions'>
      {navOptions.map((option)=>(
        <Link to={option.destination} onClick={()=>{window.scrollTo(0, 0); props.setUrl(option.title)}}><div style={props.url.toLowerCase().includes(option.title.toLocaleLowerCase())?{backgroundColor:'black'}: {backgroundColor:option.color}} className='option title'>{option.title}</div></Link>
      ))}
    </div>
  </nav>
)}

export default Nav