import React from 'react'
import './Course.css'

const Course = (props) => {
  return (
    <div className='course'>
      <h4 className='course__content'>{props.name}</h4>
    </div>
  )
}

export default Course