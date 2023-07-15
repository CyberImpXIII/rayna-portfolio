import { useState } from "react"

import DownArrow from "./DownArrow";
import '../styles/DropDown.css'
import quickNavProps from "../interfaces/QuickNavProps";
const parse = require('html-react-parser');

function DropDown({noDropDown, title, content}:quickNavProps){
  const [dropDownActive, setDropDownActive] = useState<Boolean>(false);

    return(
      <div>    
        <div style={noDropDown || content ==='' ?{top:'-105px', transition:'top .3s'}:{transition:'top .3s'}} className='quicknav' onMouseOver={()=>{!dropDownActive && setDropDownActive(true)}}>
          <div>
            <div style={{display:'flex'}}>
              <div className='dropDownTitle title'>{parse(title)}</div>
              <div className='quicknavbutton'><DownArrow dropDown={dropDownActive}/></div>
            </div>
              <div className='dropdownWrapper'>
                <div className={ dropDownActive?'quicknavText quicknavTextPaddingActive quicknavTextHeightActive':'quicknavText quicknavTextHeight quicknavTextPadding' } >
                  {parse(content)}
                </div>
              </div>
            </div>   
        </div>
        <div className={`modalBackground ${dropDownActive && 'dropDownModalBackground'}`} onMouseOver={()=>{dropDownActive && setDropDownActive(false)}}>
        </div>
      </div>
  )}

export default DropDown