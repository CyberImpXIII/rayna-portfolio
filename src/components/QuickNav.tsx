import { useState } from "react"
import { Link } from "react-router-dom";
import QuickNavOptionInterface from "../interfaces/quicknavoptioninterface"
import DownArrow from "./DownArrow";
import '../styles/QuickNav.css'

function QuickNav(){
    const [currentTitle, setcurrentTitle] = useState<String>('FARMSHELF')
    const [dropDownActive, setDropDownActive] = useState<Boolean>(false);
    const [currentDropdown, setCurrentDropdown] = useState<String>('lorem ipsum dolor')

    return(      
    <div className='quicknav' onMouseOver={()=>{setDropDownActive(! dropDownActive)}}>
      <div>
      <div className='quicknavoption title'>{currentTitle}</div>
        <div className={ dropDownActive?'quicknavText quicknavTextPaddingActive quicknavTextHeightActive':'quicknavText quicknavTextHeight quicknavTextPadding' } >{currentDropdown}</div>
      </div>
    <div className='quicknavbutton'><DownArrow dropDown={dropDownActive}/></div>
  </div>
  )}

export default QuickNav