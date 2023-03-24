import data from './data'

interface ContentContainerProps {
    data:data,
    setActive:Function,
    active:string,
    aboutActive:Boolean    ,
    noDropDown?:boolean,
    title?:string,
    content?:string,
    link?:string
  }

export default ContentContainerProps