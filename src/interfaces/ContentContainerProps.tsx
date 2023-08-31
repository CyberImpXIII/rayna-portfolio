import data from './data'

interface ContentContainerProps {
    data:data,
    setActive:Function,
    active:string,
    aboutActive:boolean,
    noDropDown?:boolean,
    title?:string,
    content?:string,
    link?:string
    setDropDownActive:Function,
    dropDownActive:boolean
  }

export default ContentContainerProps