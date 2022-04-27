import React from 'react'
import './style.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import App from '../../Home'
import Skills from '../skills/Skills'
import Works from '../works/Works'
import About from '../about/About'

/*

*/

function Nav() {

      const [style, setStyle] = useState('nav-not-move')

      return (
            <>
                  <div onClick={() => style === 'nav-not-move' ? setStyle('nav-move') : setStyle('nav-not-move')} className="menu-icon">
                        <span className="menu-part1"></span>
                        <span className="menu-part2"></span>
                        <span className="menu-part3"></span>
                  </div>
                  <ul className={'nav-list ' + style}>
                        <li><Link to='/tearex'>Home</Link></li>
                        <li><Link to='/skills'>Skills</Link></li>
                        <li><Link to='/works'>Works</Link></li>
                        <li><Link to='/about'>About</Link></li>
                  </ul>
            </>
      )
}

export default Nav