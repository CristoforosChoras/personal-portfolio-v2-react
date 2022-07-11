import React from 'react'
import Contact from '../components/Contact/'
import LogoContact from '../components/Contact/LogoContact'


function ContactPage({toggle}) {
  return (
    <>
    <LogoContact></LogoContact>
    <Contact></Contact>
    </>
  )
}

export default ContactPage