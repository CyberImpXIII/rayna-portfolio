import pageImageProps from "./pageImageProps"
import navItem from "./navItem"
import project from './project'

export default  interface data {
    pages:{
      pageImages:pageImageProps[],
      pageName:string
    }[],
    navItems:navItem[],
    projects:project[]
  }