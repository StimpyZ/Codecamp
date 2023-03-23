import React from 'react'
import '../css/style.css'

const ButtonApp = ({ isButtonlick, text, driverClick }) => {
  return (
    <button
      className={isButtonlick ? 'button-click' : 'button-reset'}
      onClick={driverClick}
    >
      {text}
    </button>
  )
}

export default ButtonApp
