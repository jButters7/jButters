import React from 'react';
import clean from '../assets/cleaningChecks.png';
import dono from '../assets/dono.png';
import './Projects.css';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='title'>Recent Work</h2>
      <div className='projects-container'>
        <a href='http://143.110.152.77:3636/'>
          <div className='cleaning-container project'>
            <h3>Cleaning Checks</h3>
            <img src={clean} alt='cleaning check site' className='product-img' />
          </div>
        </a>
        <a href="http://donationdono.us">
          <div className='dono-container project'>
            <h3>dono.</h3>
            <img src={dono} alt='donation site' className='product-img' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Projects;