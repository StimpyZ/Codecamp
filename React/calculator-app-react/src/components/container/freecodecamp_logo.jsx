import React from 'react'
import freeCodeCampIMG from '../../assets/freecodecamp-img-logo.svg'

const FreecodecampLogo = () => {
  return (
    <div className='freecodecamp-img-container'>
      <img
        src={freeCodeCampIMG}
        className='freecodecamp-img'
        alt='freecodecamp logo'
      />
    </div>
  )
}

export default FreecodecampLogo
