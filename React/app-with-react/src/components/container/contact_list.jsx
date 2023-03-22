import React from 'react'
import Contact from '../../models/contact.class'
import ContactContainer from '../pure/contact'

const ContactList = () => {
  const defaultUser = new Contact('Jole24', 'Equisde', 'example@gmail.com', false)

  return (
    <div>
      <h1>
        Default User
      </h1>
      <ContactContainer props={defaultUser}> </ContactContainer>
    </div>
  )
}

export default ContactList
