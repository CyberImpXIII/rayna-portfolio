import { useState } from "react"
import DownArrow from "./DownArrow";
import '../styles/QuickNav.css'

function QuickNav(){
  interface dropdownData {
    title: string,
    content: string,
    url: string
} 

  const [currentDropdown, setCurrentDropdown] = useState<dropdownData>({title:'FARMSHELF', content:'loremipsum', url:''});
  const [dropDownActive, setDropDownActive] = useState<Boolean>(false);
  const [dropdownList, setDropdownList] = useState<dropdownData[]>([{title:'FARMSHELF', content:'loremipsum', url:''}]);
    

    return(      
    <div className='quicknav' onMouseOver={()=>{setDropDownActive(! dropDownActive)}}>
      <div>
      <div className='quicknavoption title'>{currentDropdown.title.toString()}</div>
        <div className={ dropDownActive?'quicknavText quicknavTextPaddingActive quicknavTextHeightActive':'quicknavText quicknavTextHeight quicknavTextPadding' } >{currentDropdown.content.toString()}</div>
      </div>
    <div className='quicknavbutton'><DownArrow dropDown={dropDownActive}/></div>
  </div>
  )}

export default QuickNav