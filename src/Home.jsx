import React, { useState, useEffect } from 'react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import './animate.min.css'
import 'animate.css';
import Nav from './components/navbar/Nav'
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import About from './components/about/About';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion'

function App() {

  return (
    <motion.div className='body-main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Nav />
      <h1 className="main-text">
        <div className="main-title">
          <span className='title'>b</span><span className='title'>e </span><span className='title'> S</span><span className='title'>m</span><span className='title'>a</span><span className='title'>r</span><span className='title'>t</span><span className='title'>,</span><br /><span className='title'>B</span><span className='title'>e </span><span className='title'> K</span><span className='title'>i</span><span className='title'>n</span><span className='title'>d</span><span className='title'>,</span><br /><span className='title'>B</span><span className='title'>e </span><span className='title'> B</span><span className='title'>r</span><span className='title'>a</span><span className='title'>v</span><span className='title'>e</span>
        </div>
      </h1>
    </motion.div >
  )
}

export default App 