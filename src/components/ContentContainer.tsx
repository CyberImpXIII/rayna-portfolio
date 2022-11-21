import { Route, Routes } from "react-router-dom"
// import { useState } from "react"
import "../styles/Project.css"
import App from './App'
// import QuickNavOptionInterface from "../interfaces/quicknavoptioninterface"
import Print from "./pages/Print"
import Digital from "./pages/Digital"
import Spaces from "./pages/Spaces"
import Illustration from "./pages/Illustration"
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


const ContentContainer = ()=>{
    // const [routes, setRoutes] = useState<QuickNavOptionInterface[]>([
    //     {title:'FARMSHELF', img:'test',  destination:'./farmshelf'},
    //     {title:'MCNY',  img:'test',destination:'./mcny'},
    //     {title:'FLETCHER\'S FAE',  img:'test',destination:'./fletchersfae'},
    //     {title:'GOOGLE CAMBRIDGE',  img:'test',destination:'./googlecambridge'},
    //     {title:'SYMPOSIA',  img:'test', destination:'./symposia'},
    // ]);
    
    return(
        <div className='pageContainer' >
        <Routes>
          <Route path={`/print`} element={<Print />} />
          <Route path={`/digital`} element={<Digital />} />
          <Route path={`/space`} element={<Spaces />} />
          <Route path={`/Illustration`} element={<Illustration />} />
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
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    )
}

export default ContentContainer