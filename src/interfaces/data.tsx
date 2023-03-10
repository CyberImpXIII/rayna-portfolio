import pageImageProps from "./pageImageProps"
import navItem from "./navItem"
import projectImage from "./ProjectImage"

interface project{
    projectName:string,
    projectLink:string,
    projectImages:projectImage[]
}

export default  interface data {
    pages:{
      pageImages:pageImageProps[],
      pageName:string
    }[],
    navItems:navItem[],
    projects:project[]
  }