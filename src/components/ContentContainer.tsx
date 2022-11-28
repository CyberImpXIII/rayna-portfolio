import { Route, Routes } from "react-router-dom"
import "../styles/Project.css"
import Home from './Home'
import About from "./pages/About"
import Symposia from './projects/Symposia'
import Farmshelf from './projects/Farmshelf'
import MuseumOTCityOfNewYork from "./projects/MuseumOTCityOfNewYork"
import Corduroy from "./projects/Corduroy"
import Dollhouse from "./projects/Dollhouse"
import FletchersFae from "./projects/FletchersFae"
import Google from "./projects/Google"
import Kubrick from "./projects/Kubrick"
import Rebel from "./projects/Rebel"
import Page from './pages/Page'
import ContentContainerProps from "../interfaces/ContentContainerProps"

const ContentContainer = (props:ContentContainerProps)=>{
    return(
        <div className='pageContainer' >
        <Routes>
          {props.data.pages.map((page)=>(
          <Route path={`/${page.pageName}`} element={<Page pageName={page.pageName} setActive={props.setActive} images={page.pageImages}/>} />
          ))}
          <Route path={`/About`} element={<About />} />
          {/*projects*/}
          <Route path={`/Symposia`} element={<Symposia />} />
          <Route path={`/Farmshelf`} element={<Farmshelf />} />
          <Route path={`/museumotcny`} element={<MuseumOTCityOfNewYork />} />
          <Route path={`/corduroy`} element={<Corduroy />} />
          <Route path={`/dollhouse`} element={<Dollhouse />} />
          <Route path={`/FletchersFae`} element={<FletchersFae />} />
          <Route path={`/google`} element={<Google />} />
          <Route path={`/kubrick`} element={<Kubrick />} />
          <Route path={`/rebel`} element={<Rebel />} />
          {/* <Route path={`museumotcny`} element={<MuseumOTCityOfNewYork />} /> */}
          <Route path="/" element={<Home data={props.data} setActive={props.setActive}/>} />
        </Routes>
      </div>
    )
}

export default ContentContainer