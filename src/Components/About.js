import React from 'react';
import './About.css';
import computer from '../assets/computer.png'

const About = () => {
  return (
    <section className='about-container' id='about'>
      <h3 className='about-me-text'>About Me</h3>
      <div className='paragraph-and-icon'>
        <div className='about-paragraph'>
          <p>After graduating from Brigham Young University with a Bachelor's degree in Russian I became exposed to web development. To my surprise, I loved it. Creating solutions to complex problems became a part of my past time. Within 6 months of graduation I enrolled at DevMountain. </p>
          <p>I have been coding ever since. I thrive on creating simple yet practical web applications to make life more efficient and better.</p>
          <p>In my free time I hike with my wife, play chess, and spend time with my daughter.</p>
        </div>
        <a href='https://docs.google.com/document/d/1i2whV3E6rlYfMxYATagTWbZwanz4ZY67IvGcVhw27rM/edit?usp=sharing' className='computer-resume'>
          <img src={computer} alt='computer coding icon' className='computer-icon' />
          <h4>My Resume</h4>
        </a>
      </div>
    </section>
  )
}

export default About;