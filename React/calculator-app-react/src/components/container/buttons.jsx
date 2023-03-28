import React from 'react'
import '../css/style.css'

const Buttons = (props) => {
  const isOperator = (val) => {
    return isNaN(val) || val === '.' || val === '='
  }

  return (
    <button
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.driveClick(props.children)}
    >
      {props.children}
    </button>
  )
}

export default Buttons
