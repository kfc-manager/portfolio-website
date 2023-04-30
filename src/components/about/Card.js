import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <article className='card'>
        <div className='icon'>
            {props.icon}
        </div>
        <h4 className='card__headline'>
            {props.headline}
        </h4>
        {props.lines.map(item => {return <h5 className='card__content'>{item}</h5>})}
    </article>
  )
}

export default Card
