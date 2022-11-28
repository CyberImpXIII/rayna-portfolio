import { useState } from "react"
import DownArrow from "./DownArrow";
import '../styles/QuickNav.css'
import quickNavProps from "../interfaces/QuickNavProps";


function QuickNav(props:quickNavProps){

  const [dropDownActive, setDropDownActive] = useState<Boolean>(false);
    

    return(      
    <div className='quicknav' onMouseOver={()=>{setDropDownActive(! dropDownActive)}}>
      <div>
      <div className='quicknavoption title'>{props.title.toString()}</div>
        <div className={ dropDownActive?'quicknavText quicknavTextPaddingActive quicknavTextHeightActive':'quicknavText quicknavTextHeight quicknavTextPadding' } >{props.content.toString()}</div>
      </div>
    <div className='quicknavbutton'><DownArrow dropDown={dropDownActive}/></div>
  </div>
  )}

export default QuickNav