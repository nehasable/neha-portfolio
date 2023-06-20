//here the data from api is extracted using props

import './Work.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Work = (props) => {                               //will only contain contents of the project cards
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt="image"></img>
        <h2 className='title'>{props.title}</h2>
        <div className='pro-details'>
          <p>{props.text}</p>
          <div className='pro-btns'>
            <NavLink to={props.view}
            className="btn">
              View
            </NavLink>
            <NavLink to="url.com"
            className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default Work
