import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='form'>
    <form className='details'>
        <label className='label2'>Name</label>
        <input className='2'type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows="4" placeholder='Type your message here'>
        </textarea>
        <button className='btn'>Submit</button>
    </form>
      
    </div>
  )
}

export default Form
