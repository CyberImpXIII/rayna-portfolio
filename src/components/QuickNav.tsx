import { useState } from "react"
import { Link } from "react-router-dom";
import QuickNavOptionInterface from "../interfaces/quicknavoptioninterface"
import DownArrow from "./DownArrow";
import '../styles/QuickNav.css'

function QuickNav(){
    const [quickNavOptions, setQuickNavOptions] = useState<QuickNavOptionInterface[]>([
      {title:'FARMSHELF',  destination:'./farmshelf'},
      {title:'MCNY',  destination:'./mcny'},
      {title:'FLETCHER\'S FAE',  destination:'./fletchersfae'},
      {title:'GOOGLE CAMBRIDGE',  destination:'./googlecambridge'},
      {title:'SYMPOSIA',  destination:'./symposia'},
    ])
    const [dropDownActive, setDropDownActive] = useState<Boolean>(false);

    return(      
    <div className='quicknav' style={dropDownActive?{height:`${(quickNavOptions.length)*100}px`}:{height:'100px'}} onClick={()=>{setDropDownActive(!dropDownActive)}}>
      <div>
      {quickNavOptions.map((option, index)=>{
        if(index > 0){
          return(<Link to={option.destination}><div className='quicknavoption title'>{option.title}</div></Link>)
        }else{
          return(<div className='quicknavoption title'>{option.title}</div>)
        }
      }
      )}
      </div>
    <div className='quicknavbutton'><DownArrow dropDown={dropDownActive}/></div>
  </div>
  )}

export default QuickNav