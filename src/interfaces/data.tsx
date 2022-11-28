import pageImageProps from "./pageImageProps"
import navItem from "./navItem"

export default  interface data {
    pages:{
      pageImages:pageImageProps[],
      pageName:string
    }[]
    navItems:navItem[]
  }