import { Route, Routes } from "react-router-dom"
import "../styles/Project.css"
import About from "./pages/About"
import Page from './pages/Page'
import ContentContainerProps from "../interfaces/ContentContainerProps"
import { useState, useEffect } from "react"
import PageImageProps from '../interfaces/pageImageProps'
import Project from "./pages/Project"

const ContentContainer = ({data, aboutActive, active, setActive}:ContentContainerProps)=>{
  let [images, setImages] = useState<PageImageProps[]>([
    {image: 'string',
    link: 'string',
    alt: 'string',
    project:'string'}
  ])
  
  useEffect(()=>{
    let imagestemp:PageImageProps[] = [...data.pages[0].pageImages]
    for (let i = 1; i < data.pages.length; i++){
      console.log(data.pages[i].pageImages)
      imagestemp = imagestemp.concat(data.pages[i].pageImages)
    }
    console.log(imagestemp, 'test')
    setImages(imagestemp);
  },[data.pages])
    return(
        <div className={`pageContainer ${aboutActive && 'aboutActive'}`} >
        <Routes>
          {data.pages.map(({pageName, pageImages})=>(
          <Route key={`${pageName}pageContainerRoute`} path={`/${pageName}`} element={<Page active={active} pageName={pageName} setActive={setActive} images={pageImages}/>} />
          ))}
          {data.projects.map(({projectName, projectLink, projectImages})=>(
            <Route key={`${projectName}projectContainerRoute`} path={projectLink} element={<Project projectImages={projectImages} />} />
          )
          )}
          <Route path={`/About`} element={<About />} />
          <Route path="/" element={<Page active={active} pageName={'/'} setActive={setActive} images={images} />} />
        </Routes>
      </div>
    )
}

export default ContentContainer