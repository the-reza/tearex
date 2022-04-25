import React from 'react';
import ReactDOM from 'react-dom';
import App from './Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'
import Works from './components/works/Works'
import Main from './Main';
import "./style.css"
import {BrowserRouter, Routes,Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Main />
  </BrowserRouter>,
  document.getElementById('root')
);