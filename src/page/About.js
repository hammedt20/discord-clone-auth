import {React} from 'react'
import { motion } from 'framer-motion'
import {BsDownload} from 'react-icons/bs'
import './styles.css'

const About = () => {
  return (
    <div className='about'>
      <motion.div initial={{ opacity: 0, y: '100' }} whileInView={{ opacity: 1, y:0, transition: {type: 'tween', duration: 1} }} viewport={{ once: true }} className='about-tile  section'>
        <img src='./image/study-group.svg' alt='' />
        <div className='about-details'>
          <h2>Create an invite-only place where you belong</h2>
          <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: '100' }} whileInView={{ opacity: 1, y:0, transition: {type: 'tween', duration: 1} }} viewport={{ once: true }} className='about-tile2 section'>
        <img src='./image/voice connected.svg' alt='' />
        <div className='about-details2'>
          <h2>Where hanging out is easy</h2>
          <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: '100' }} whileInView={{ opacity: 1, y:0, transition: {type: 'tween', duration: 1} }} viewport={{ once: true }} className='about-tile section'>
        <img src='./image/coach.svg' alt='' />
        <div className='about-details'>
          <h2>From few to a fandom</h2>
          <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
        </div>
      </motion.div>
      <div className='about-description'>
        <motion.div initial={{ opacity: 0, y: '100' }} whileInView={{ opacity: 1, y:0, transition: {type: 'tween', duration: 1} }} viewport={{ once: true }} className='about-description-texts'>
          <h2>Reliable tech for staying close</h2>
          <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </motion.div>
        <img src='./image/just-chilling.svg' alt='' />
      </div>
      <div className='about-content'>
        <div className='about-content-image'>
          <img src='./image/stars.svg' alt='' />
        </div>
        <h4>Ready to start your journey?</h4>
        <button className='btn'><span><BsDownload /></span>Download for windows</button>
      </div>
    </div>
  )
}

export default About