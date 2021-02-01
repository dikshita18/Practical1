import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dropdown from './DropDown';
//import App from './App';
//import Clockupdate from './Clockupdate';
//import Square from './Square';
//import Board from './Square';
//import Card from './Images';
//import Card from './Imagesp2';
//import List_value from './mapeg.js';
//import Errorboundary from './Errorboundary';
//import ErrorPage from "./TestError.js";


ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

