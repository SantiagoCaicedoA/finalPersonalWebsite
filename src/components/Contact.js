import React, { useEffect, useState, useContext } from 'react'
import '../css/contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_o3mumex',
        'template_r50bx2s',
        formRef.current,
        'user_PfPe4nILf2P9v0ZSmyQea'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='containerContact' id='contact'>
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100 102'
        height='75'
        width='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        className='svgcolor-light'
      >
        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
      </svg>
      <h1>CONTACT</h1>
      <form ref={formRef} onSubmit={handleSubmit} className='formContainer'>
        <input
          type='text'
          placeholder='Name'
          name='user_name'
          className='containerContact'
        />
        <input
          type='text'
          placeholder='Subject'
          name='user_subject'
          className='containerContact'
        />
        <input
          type='text'
          placeholder='Email'
          name='user_email'
          className='containerContact'
        />
        <textarea
          rows='5'
          placeholder='Message'
          name='message'
          className='containerContact'
        />
        <br />
        <button>Submit</button>
        {done && <span>Your message has been sent!</span>}
      </form>
    </div>
  )
}
