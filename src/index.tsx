import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import './styles/index.css';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import QuickNav from './components/QuickNav';
import ContentContainer from './components/ContentContainer';
import Project from './interfaces/project';
import { Hash } from 'crypto';
import App from './components/App';

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'fwihj6a8',
  dataset: 'projects',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

function getProjects(): Promise<Project[]> {

  // For now, consider the data is stored on a static `users.json` file
  return client.getDocument('ad27b3a7-624f-4a84-993f-35806a02164a')
          // the JSON body is taken from the response
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter basename='/'>
      <App />
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
