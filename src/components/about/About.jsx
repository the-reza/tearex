import React, { useState, useEffect } from 'react'
import Nav from '../navbar/Nav'
import './style.css'
import { motion } from 'framer-motion'


function About() {


      return (
            <>
                  <Nav />
                  <motion.div className='body-about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="main-about">
                              <h1 className='h1-about'>ABOUT ME</h1>
                              <p className=''>
                                    - I'm Reza, a smart and kind guy.
                              </p>
                              <p>
                                    - I was Born on December 18, 2005 in Iran.
                              </p>
                              <p>
                                    - Like to Program and Code.
                              </p>
                              <p>
                                    - A programmer since 2021
                              </p>
                              <h2 className='about-t'>Contact Me: tearex05@yahoo.com</h2>
                        </div>
                        <div className="cr"></div>
                  </motion.div>
            </>
      )
}

export default About