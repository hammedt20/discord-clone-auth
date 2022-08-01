import React, {  } from 'react'
import {BsDownload} from 'react-icons/bs'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import './styles.css'
// import AuthContext from '../context/AuthContext'

const Header = () => {
  // const {formData} = useContext(AuthContext)

  return (
    <div className='header'>
      <Navbar />
      <motion.div initial={{ opacity: 0, x: '-100%' }} whileInView={{ opacity: 1, x:0, transition: {type: 'spring', bounce: 0.4, duration: 2} }} viewport={{ once: true }} className='header-container'>
        <div className='header-content'>
          <div className='header-texts'>
            <h1> Imagine a place...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          </div>
          <div className='header-buttons'>
            <button className='btn first'><span><BsDownload /></span> Download for windows</button>
            <button className='btn second'>Open Discord in your browser</button>
          </div>
        </div>
      </motion.div>
      <div className='header-img'>
        <img className='header-img-new' src='./image/new.svg' alt=''/>
        <img className='header-img-hero1' src='./image/hero1.svg' alt=''/>
        <img className='header-img-hero2' src='./image/hero2.svg' alt=''/>
      </div>
    </div>
  )
}

export default Header