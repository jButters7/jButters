import React from 'react';
import './Landing.css';
import family from '../assets/family.jpeg'
import familyMin from '../assets/family-min.jpeg'

const Landing = () => {
  return (
    <section className='landing-container' id='home'>
      <h1 className='hero-text blue-text'>Hello, I'm Jacob Butters</h1>
      <h2 className='description-text red-text'>I am a web developer</h2>
      <img className='family-pic' src={familyMin} alt='my family' />
    </section>
  )
}

export default Landing;