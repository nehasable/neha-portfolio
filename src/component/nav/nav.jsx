import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {

  const[icon,setIcon]=useState(true)
  const handleIcon = () => setIcon(!icon)  //usestate to change the state of hamburger icon
  
  /*const[color,setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=1)
{
  setColor(true);                   //use state for header color
}  
else{
  setColor(false);
}};
window.addEventListener("scroll",changeColor)*/
  return (
    <div className='header'>
      <Link to="/"> 
<h1>Portfolio</h1>
      </Link>

      <ul className={icon ? 'nav-menu':'nav-menu active'}>    
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleIcon}>
      {icon ?(<FaBars size={20} style={{color:'#4C3D3D'}}></FaBars> ) :         // the input value is true
        
       (<FaTimes size={20} style={{color:'#4C3D3D'}}></FaTimes> )   //if input value false, which is defined using handleicon
        }            
      </div>
    </div>
  )
}

export default Nav
