import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Content from "./Content"
import App from './App'
import QuickNavOptionInterface from "../interfaces/quicknavoptioninterface"
const ContentContainer = ()=>{
    const [routes, setRoutes] = useState<QuickNavOptionInterface[]>([
        {title:'FARMSHELF',  destination:'./farmshelf'},
        {title:'MCNY',  destination:'./mcny'},
        {title:'FLETCHER\'S FAE',  destination:'./fletchersfae'},
        {title:'GOOGLE CAMBRIDGE',  destination:'./googlecambridge'},
        {title:'SYMPOSIA',  destination:'./symposia'},
    ]);
    return(
        <div className='pageContainer'>
          <img className="projectImage" src="https://drive.google.com/uc?export=view&id=0BwU3sE6nwnntVnZTNHRoMFJTc3M"/>
        <Routes>
          <Route path="/" element={<App />} />
          {routes.map((route)=>{
            return(<Route path={route.destination} element={<div />} />)
          })}
        </Routes>
      </div>
    )
}

export default ContentContainer