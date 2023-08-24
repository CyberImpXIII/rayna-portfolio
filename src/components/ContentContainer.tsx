import { Route, Routes } from "react-router-dom"
import "../styles/Project.css"
import About from "./pages/About"
import Page from './pages/Page'
import ContentContainerProps from "../interfaces/ContentContainerProps"
import { useState, useEffect } from "react"
import PageImageProps from '../interfaces/pageImageProps'
import Project from "./pages/Project"

const ContentContainer = ({link, title, content, noDropDown, data, aboutActive, active, setActive}:ContentContainerProps)=>{
  let [images, setImages] = useState<PageImageProps[]>([
    {image: 'string',
    link: 'string',
    alt: 'string',
    project:'string'}
  ])
  
  useEffect(()=>{
    console.log(data)
    let imagestemp:PageImageProps[] = [...data.pages[0].pageImages]
    for (let i = 1; i < data.pages.length; i++){
      imagestemp = imagestemp.concat(data.pages[i].pageImages)
    }
    setImages(imagestemp);
  },[data.pages])
    return(
        <div className={`pageContainer ${aboutActive && 'aboutActive'}`} >
        <Routes>
          {data.pages.map(({pageName, pageImages}, i)=>(
          <Route key={`${pageName}pageContainerRoute${i}`} path={`/${pageName}`} element={<Page link={link} content={content} title={title} noDropDown={noDropDown} active={active} pageName={pageName} setActive={setActive} images={pageImages}/>} />
          ))}
          {data.projects.map(({dropdownContent, projectName, projectLink, projectImages}, i)=>(
            <Route key={`${projectName}projectContainerRoute${i}`} path={projectLink} element={<Project content={dropdownContent} title={projectName} projectImages={projectImages} />} />
          )
          )}
          <Route path={`/About`} element={<About />} />
          <Route path="/" element={<Page key={`home`} active={active} pageName={'/'} link={link} content={content} title={title} setActive={setActive} images={images} />} />
        </Routes>
      </div>
    )
}

export default ContentContainer