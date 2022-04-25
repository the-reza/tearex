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
                              <p>
                                    - I'm Reza, an smart and kind guy.<br /> - I was Born on December 18, 2005 in Iran.<br />- Like to Program and Code.<br />
                                    - A programmer since 2021
                                    <h2 className='about-t'>Contact Me: tearex05@yahoo.com</h2>
                              </p>
                        </div>
                        <div className="cr"></div>
                  </motion.div>
            </>
      )
}

export default About