import React from 'react'
import '../css/style3.css'

const ButtonClear = (props) => {
  return (
    <div
      className='button-clear'
      // eslint-disable-next-line react/jsx-handler-names
      onClick={props.driveClear}
    >
      {props.children}
    </div>
  )
}

export default ButtonClear
