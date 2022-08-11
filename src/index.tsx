import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes,
  Route } from "react-router-dom";
import './index.css';
import App from './App';
import Test from './routes/test';
import reportWebVitals from './reportWebVitals';

const quicknavoptions: { 
  title: string; 
  destination: string;
}[] = [
  {title:'wideblock', destination:'./'},
  {title:'wideblock', destination:'./'}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="test" element={<Test />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
