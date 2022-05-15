import React from 'react'
import Nav from '../navbar/Nav'
import './style.css'
import { motion } from 'framer-motion'

function Skills() {


      return (
            <>
                  <Nav />
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='body-skills'>
                        <div className="skills-text">
                              <h1 className='skills-main'>My Skills</h1>
                              <p>Here you can see all my skills.</p>
                        </div>
                        <ul className='skills-title'>
                              <li className='white'>

                                    HTML
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='red'>
                                    CSS
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='blue'>
                                    SASS
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='orange'>
                                    JAVASCRIPT
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='green'>
                                    BOOTSTRAP
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='purple'>
                                    REACT.JS
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='yellow'>
                                    ES6
                                    <span></span><span></span><span></span><span></span>
                              </li>
                              <li className='aquamarine'>
                                    GITHUB
                                    <span></span><span></span><span></span><span></span>
                              </li>
                        </ul>
                  </motion.div>
            </>
      )
}

export default Skills