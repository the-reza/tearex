import React from 'react'
import Nav from '../navbar/Nav'
import Example from './Example'
import './style.css'
import { motion } from 'framer-motion'
import Tour from './example pics/tour-main-page.PNG';
import Hamburger from "./example pics/hamburger.png"
import Benz from './example pics/benz.PNG'
import StarWars from './example pics/starwars.png'
import RH from "./example pics/rexhub.png"
import TRGame from './example pics/tearexgame.jpg'

function Works() {
      return (
            <>
                  <Nav />
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='body-works'>
                        <Example link='https://the-reza.github.io/tour/' img={Tour} />
                        <Example link='https://the-reza.github.io/hamburger/' img={Hamburger} />
                        <Example link='https://the-reza.github.io/benz' img={Benz} />
                        <Example link='http://star-wars.gigfa.com/' img={StarWars} />
                        <Example link='https://the-reza.github.io/rexhub' img={RH} />
                        <Example link='https://the-reza.github.io/tearexgame/' img={TRGame} />
                        <Example link='#' img='https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        <Example link='#' img='https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                  </motion.div>
            </>
      )
}

export default Works