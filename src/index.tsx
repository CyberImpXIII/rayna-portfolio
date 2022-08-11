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

const quicknavoptions:Quicknavoptioninterface[] = [
  {title:'wideblock', destination:'./'},
  {title:'wideblock', destination:'./'}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Header/>
      <Nav/>
      <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </div>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
