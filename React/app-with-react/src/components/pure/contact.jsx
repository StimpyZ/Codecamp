import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../models/contact.class'

const ContactContainer = ({ props }) => {
  return (
    <div>
      <p>Tu nombre es: {props.name}</p>

      <p>Tu apellido es: {props.lastName}</p>

      <p>Tu e-mail es: {props.email}</p>

      <p>Estado: {props.conected ? 'Conectado' : 'Desconectado'}</p>
    </div>
  )
}

ContactContainer.propTypes = {
  props: (PropTypes.instanceOf = Contact)
}

export default ContactContainer
