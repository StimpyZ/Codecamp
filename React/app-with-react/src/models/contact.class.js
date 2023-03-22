export default class Contact {
  name = ''
  lastName = ''
  email = ''
  conected = Boolean

  constructor (name, lastName, email, conected) {
    this.name = name
    this.lastName = lastName
    this.email = email
    this.conected = conected
  }
}
