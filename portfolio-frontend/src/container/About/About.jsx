import React, { useState, useEffect } from 'react'
import './About.scss';

import { motion } from 'framer-motion'
import {images} from "../../constants"

const abouts = [{
  title: 'Web Design', description: 'I am good at Web Design.', imgUrl: images.about01
},
{
  title: 'UX/UI', description: 'I am good at UX/UI.', imgUrl: images.about02
},
{
  title: 'Web Development', description: 'I am good at web development.', imgUrl: images.about03
},
{ title: 'Web Engineer', description: 'I am good at Web Engineer.', imgUrl: images.about04 }
];



const About = () => {

  return (
    <>

      <h2 className='head-text'>
        I Know That <span>Good Apps</span> <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20 }} >{about.title}</h2>
              <p className='p-text' style={{marginTop: 20 }} >{about.description}</p>

          </motion.div>
        ))}
      </div>





    </>
  )
}








export default About