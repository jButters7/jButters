import React from 'react';
import '../Components/Stack.css'
import affinity from '../assets/techLogos/Affinity.jpg'
import css3 from '../assets/techLogos/CSS3.png'
import finalCut from '../assets/techLogos/Final_Cut_Pro.png'
import git from '../assets/techLogos/Git.png'
import html from '../assets/techLogos/HTML5.png'
import javascript from '../assets/techLogos/JavaScript.png'
import node from '../assets/techLogos/node.png'
import sql from '../assets/techLogos/PostgreSQL.png'
import reactPic from '../assets/techLogos/React.png'
import socket from '../assets/techLogos/socket.png'

const Stack = () => {
  return (
    <section id='stack' className='stack' >
      <h3>Skills</h3>
      <div className='tech-logo-container'>
        <div className='individual-stack'>
          <img src={javascript} alt='javascript logo' className='tech-logos'></img>
          <p>JavaScript</p>
        </div>
        <div className='individual-stack'>
          <img src={reactPic} alt='react logo' className='tech-logos'></img>
          <p>React.js</p>
        </div>
        <div className='individual-stack'>
          <img src={html} alt='html5 logo' className='tech-logos'></img>
          <p>HTML5</p>
        </div>
        <div className='individual-stack'>
          <img src={css3} alt='css3 logo' className='tech-logos'></img>
          <p>CSS3</p>
        </div>
        <div className='individual-stack'>
          <img src={node} alt='node.js logo' className='tech-logos'></img>
          <p>Node.js</p>
        </div>
        <div className='individual-stack'>
          <img src={sql} alt='postgreSQL logo' className='tech-logos'></img>
          <p>PostgreSQL</p>
        </div>
        <div className='individual-stack'>
          <img src={git} alt='git logo' className='tech-logos'></img>
          <p>Git</p>
        </div>
        <div className='individual-stack'>
          <img src={socket} alt='socket.io logo' className='tech-logos'></img>
          <p>socket.io</p>
        </div>
        <div className='individual-stack'>
          <img src={finalCut} alt='final cut pro logo' className='tech-logos'></img>
          <p>Final Cut Pro X</p>
        </div>
        <div className='individual-stack'>
          <img src={affinity} alt='affinity photo logo' className='tech-logos'></img>
          <p>Affinity Photo</p>
        </div>
      </div>
    </section>
  )
}

export default Stack;