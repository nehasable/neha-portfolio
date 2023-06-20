import React from 'react'
import './header.css'
import FullImg from '../full.jpg' 
import { Link } from 'react-router-dom'
const Header = () => {                //this header template will be used for all pages
  return (
    <div className='header'>
    <div className='mask'>
      <img className='img'
      src={FullImg} alt='FullImg' >

      </img>
    </div>
    <div className='content'>
      <p> NEHA SABLE</p>
      <h1>React Developer</h1>
      <div>
        <Link to='/experience' className='btn'>Experience</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default Header
