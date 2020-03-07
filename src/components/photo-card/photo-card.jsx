import React from 'react'
import './photo-card.styles.scss'

const Card = (props) => (
    <div className='card-wrapper'>
        <img className='background-img' alt='test' src={props.image} />
        <div className='content'>
            <p 
            className='description'>{props.description}</p>
        </div>
    </div>
)

export default Card