import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import './styles/index.css';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import QuickNav from './components/QuickNav';
import ContentContainer from './components/ContentContainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <link rel="stylesheet" href="https://use.typekit.net/jsp6plk.css"></link>
      <Header/>
      <Nav/>
      <QuickNav/>
      <ContentContainer />
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
