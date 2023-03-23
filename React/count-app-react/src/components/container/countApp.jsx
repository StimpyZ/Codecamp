import React, { useState } from 'react'
import ButtonApp from '../pure/buttonApp'
import '../css/style2.css'

export default function CountApp () {
  const [countNumber, setCountNumber] = useState(0)
  const countFunc = () => {
    setCountNumber(countNumber + 1)
  }

  const resetFunc = () => {
    setCountNumber(0)
  }
  return (
    <div className='main'>
      <div className='count'>
        {countNumber}
      </div>
      <ButtonApp
        text='Count'
        isButtonlick
        driverClick={countFunc}
      />
      <ButtonApp
        text='Reset'
        isButtonlick={false}
        driverClick={resetFunc}
      />
    </div>

  )
}
