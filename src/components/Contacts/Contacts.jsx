import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import './Contacts.css'

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>respond2shivaji@gmail.com</h5>
            <a href="mailto:respond2shivaji@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>shivajichalise</h5>
            <a href="https://m.me/literallyshiv" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />
          <input type="text" name="subject" id="" placeholder='Subject' required />
          <textarea name="message" id="" rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
