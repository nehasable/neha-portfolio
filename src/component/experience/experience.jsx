import React from 'react'
import './experience.css'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Header2 from '../header2/header2'
import Work2 from '../work/Work2'
const Experience = () => {
  return (
    <div>
      <Nav/>
      <Header2 heading="EXPERIENCE." text="Some of my recent works"/>
      <Work2/>
      <Footer/>
    </div>
  )
}

export default Experience
