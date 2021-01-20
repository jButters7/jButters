import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import home from '../assets/home.png';
import about from '../assets/about.png';
import projects from '../assets/projects.png';
import stack from '../assets/stack.png';

const NavBar = () => {

  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleScrollProjects = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleScrollStack = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 10000,
      left: 0,
      behavior: 'smooth'
    })
  }


  const handleScrollAbout = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleScrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div>
      <button className={navBarOpen ? 'hamburger-icon hamburger-open' : 'hamburger-icon hamburger-closed'} onClick={() => setNavBarOpen(!navBarOpen)}>&#9776;</button>
      {navBarOpen ?
        <header className="nav-bar-container">
          <nav>
            <Link className='text-and-icon' to='/landing' onClick={(e) => handleScrollTop(e)}>
              <img src={home} alt='home icon' className='nav-icon' />
              <li className='nav-text' id='home'>Home</li>
            </Link>
            <Link className='text-and-icon' to='/about' onClick={(e) => handleScrollAbout(e)}>
              <img src={about} alt='about icon' className='nav-icon about-icon' />
              <li className='nav-text' id='about'>About</li>
            </Link>
            <Link className='text-and-icon' to='/projects' onClick={(e) => handleScrollProjects(e)}>
              <img src={projects} alt='projects icon' className='nav-icon' />
              <li className='nav-text' id='projects'>Projects</li>
            </Link>
            <Link className='text-and-icon' to='/stack' onClick={(e) => handleScrollStack(e)}>
              <img src={stack} alt='stack icon' className='nav-icon' />
              <li className='nav-text' id='stack'>Stack</li>
            </Link>
          </nav>
        </header> : null}
    </div>
  )
}

export default NavBar