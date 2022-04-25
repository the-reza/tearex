import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import App from '../Home';
import Skills from './skills/Skills';
import Works from './works/Works';
import About from './about/About';
import Error from './Error';
import { AnimatePresence } from 'framer-motion'


function Animation() {
      const location = useLocation()
      return (
            <AnimatePresence>
                  <Routes location={location} key={location.pathname}>
                        <Route exact element={<App />} path='/' />
                        <Route element={<Skills />} path='/skills' />
                        <Route element={<Works />} path='/works' />
                        <Route element={<About />} path='/about' />
                        <Route element={<Error />} path='*' />
                  </Routes>
            </AnimatePresence>
      )
}

export default Animation