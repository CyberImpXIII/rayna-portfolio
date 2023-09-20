import { useState } from "react"

import DownArrow from "./DownArrow";
import '../styles/DropDown.css'
import dropdownProps from "../interfaces/dropdownProps";
const parse = require('html-react-parser');

function DropDown({dropDownActive, setDropDownActive, noDropDown, title, content}:dropdownProps){

    return(
      <div>    
        <div style={noDropDown || content ==='' ?{top:'-105px', transition:'top .3s'}:{transition:'top .3s'}} className='quicknav' onMouseEnter={()=>{setDropDownActive && setDropDownActive(true)}} onMouseLeave={()=>{setDropDownActive && setDropDownActive(false)}}>
          <div>
            <div style={{display:'flex'}}>
              <div className='dropDownTitle title'>{parse(title)}</div>
              <div className='quicknavbutton' onClick={()=>{setDropDownActive && setDropDownActive(!dropDownActive)}}><DownArrow dropDownActive={dropDownActive}/></div>
            </div>
              <div className='dropdownWrapper'>
                <div className={ dropDownActive ? 'quicknavText quicknavTextPaddingActive quicknavTextHeightActive':'quicknavText quicknavTextHeight quicknavTextPadding' } >
                  {parse(content)}
                </div>
              </div>
            </div>   
        </div>
      </div>
  )}

export default DropDown