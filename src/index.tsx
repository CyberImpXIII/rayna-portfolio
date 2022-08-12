import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import './styles/index.css';
import App from './routes/App';
import Nav from './components/Nav';
import Quicknavoptioninterface from './interfaces/quicknavoptioninterface';
import Test from './routes/test';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import QuickNav from './components/QuickNav';

const quicknavoptions:Quicknavoptioninterface[] = [

    {title:'FARMSHELF',  destination:'./farmshelf'},
    {title:'MCNY',  destination:'./mcny'},
    {title:'FLETCHER\'S FAE',  destination:'./fletchersfae'},
    {title:'GOOGLE CAMBRIDGE',  destination:'./googlecambridge'},
    {title:'SYMPOSIA',  destination:'./symposia'},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
      <Header/>
      <Nav/>
      <QuickNav/>
      <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<App />} />
          {quicknavoptions.map((route)=>{
            return(<Route path={route.destination} element={<Test />} />)
          })}
        </Routes>
      </div>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
