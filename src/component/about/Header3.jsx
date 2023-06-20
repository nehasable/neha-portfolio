import './Header3.css'
import React, { Component } from 'react'
import CV from '../assets/cv.pdf'
import { Link } from 'react-router-dom'
class Header3 extends Component  {            //multiple classes can be extended from React Component
    render(){
  return (
    
      <div className='header2'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        
        <div className='btn'>
        <Link to={CV} download>Download CV</Link>
        </div>
      </div>
    </div>
   
  )
    }
}

export default Header3
