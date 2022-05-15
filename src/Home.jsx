import React from 'react';
import './style.css';
import './animate.min.css';
import 'animate.css';
import Nav from './components/navbar/Nav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function App() {

  return (
    <motion.div className='body-main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Nav />
      <h1 className="main-text">
        <span className="title-t">TEA</span> <br />
        <span className="title-r">REX</span>
        <p className='explore-more'>a personal website</p>
        <Link to='/works' className="explore">EXPLORE</Link>
      </h1>
    </motion.div >
  )
}

export default App 