import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import "../styles/Project.css"
import App from './App'
import QuickNavOptionInterface from "../interfaces/quicknavoptioninterface"
const ContentContainer = ()=>{
    const [routes, setRoutes] = useState<QuickNavOptionInterface[]>([
        {title:'FARMSHELF', img:'test',  destination:'./farmshelf'},
        {title:'MCNY',  img:'test',destination:'./mcny'},
        {title:'FLETCHER\'S FAE',  img:'test',destination:'./fletchersfae'},
        {title:'GOOGLE CAMBRIDGE',  img:'test',destination:'./googlecambridge'},
        {title:'SYMPOSIA',  img:'test', destination:'./symposia'},
    ]);
    return(
        <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<App />} />
          {routes.map((route)=>{
            return(<Route path={route.destination} element={<div />} />)
          })}
        </Routes>
        <div>
        </div>
      </div>
    )
}

export default ContentContainer