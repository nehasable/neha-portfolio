//Main File
//here data from Work is displayed for each card using map method to extract data from array using index
import './Work.css'
import WorkData from './WorkData'
import Work from './Work'
import React from 'react'


const Work2 = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className='project-container'>
     {WorkData.map((val,ind)=>{
      return(
       <Work                                           //since the data is extracted from Work and mapped to val by index no
        key={ind}
        imgsrc={val.imgsrc}                                //variables are from api
        title={val.title}
        text={val.text}
        view={val.view}


       /> 
      )
     }

    
     )} 
    </div>
      
    </div>
  )
}

export default Work2
