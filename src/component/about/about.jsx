import React from 'react'
import './about.css'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Header2 from '../header2/header2'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import Header3 from './Header3'
const About = () => {
  return (
    <div>
    <Nav/>
    <Header3 heading="ABOUT" text="I am React developer."/>
    
   
    <Card/>
    <Footer/>
    </div>
  )
}

export default About
