import React from 'react'
import '../css/style.css'

function Testimonio (props) {
  return (
    <div className='card-container'>
      <div className='card-img-container'>
        <img
          className='card-img'
          src={props.cardImg}
          alt='Shawn Wang'
        />
      </div>
      <div className='card-text-container'>
        <p className='card-name'>
          {props.name} en {props.country}
        </p>
        <p className='card-job'>
          {props.job} en {props.company}
        </p>
        <div className='card-testimonio-container'>
          <p className='card-testimonio'>{props.testimonio}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonio
