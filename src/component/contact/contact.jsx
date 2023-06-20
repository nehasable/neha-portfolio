import React from 'react'
import './contact.css'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import Header2 from '../header2/header2'
import Form from '../form/form'
const Contact = () => {
  return (
    <div>
      <Nav/>
      <Header2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
