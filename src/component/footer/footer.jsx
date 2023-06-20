import React from 'react'
import './footer.css'
import {FaFacebook, FaHome, FaLinkedin,FaTwitter, FaMailBulk, FaPhone} from 'react-icons/fa'        //check html tags of that class if css is not working
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
      <div className='left'>
      <div className='location'>
        <FaHome size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}}
          
        />
        <div>
<p>Mumbai,</p>
<p>India</p>
        </div>
      </div>
      <div className='phone'>
        <h4><FaPhone size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}} 
        />19922334
        </h4></div>
<div className='email'>
       <h4> <FaMailBulk size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}} 
        />nehasable45@gmail.com
        </h4></div>


</div>
        <div className='right'>
<h1>About Me</h1>
<p>I am an undergrad student studying IT. 
Currenty making React projects and
looking to expand my skills by providing
services for the same.</p>
<div className='socials'>
        <FaFacebook size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}} 
        />
        <FaTwitter size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}} 
        />
        <FaLinkedin size={20} style={{color:"#4C3D3D",
          marginLeft:'1rem'}} 
        />

        </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Footer
