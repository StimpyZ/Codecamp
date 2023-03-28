import React from 'react'
import '../css/style3.css'

const ButtonClear = (props) => {
  return (
    <button
      className='button-clear'
      // eslint-disable-next-line react/jsx-handler-names
      onClick={props.driveClear}
    >
      {props.children}
    </button>
  )
}

export default ButtonClear
