import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';
import React from 'react';
import { useState } from 'react';
import './ContactPage.css';
import instaLogo from '/images/InBug-White.png';
import mainPhoto from '/images/Prairie.JPG';
import { Container, Row, Col } from 'react-bootstrap';


function ContactPage() {
  //this provides the glitch effect for the main page header
  const glitch = useGlitch();

  //this is the state for the contact form
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const addContactMessage = useStore((state) => state.addContactMessage);

  const formHandler = (event) => {
    event.preventDefault();

    const newMessage = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    }

    console.log('New message console:', newMessage);

    addContactMessage(newMessage);

    setNameInput('');
    setEmailInput('');
    setMessageInput('');

    //I am debating whether or not to add a message sent confirmation or a redirect to a new page
  }
  
  // add a loop of the reviews at the bottom of the page


  return (
    <>
      <h2 className="glitch" id="contactHeader" data-text='text'>ContactMe:</h2>
      <br/>
      <Row>
        <Col>
        <img src={mainPhoto} alt="photo" className="contactPhoto" />
        </Col>
        <Col>
      <section className='contactForm'>
        <h4>Let's talk business!</h4>
        <form id="contact-form" onSubmit={formHandler}>
          <label>Name:</label>
          <input type="text" id="name" placeholder="First & Last" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required />
          
          <label>Email:</label>
          <input type="email" id="email" placeholder="creepypasta@gmail.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
          
          <label>Message:</label>
          <textarea type="textarea" id="message" placeholder="Tell me what type of services you're interested in. Thank you!" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} required></textarea>
          <br/>

          <button type="submit">Send</button>
        </form>
      </section>
        </Col>
      </Row>

    <br/>
    <img className="instaLogo" src={instaLogo} alt="Instagram Logo" />
    </>
  );
}


export default ContactPage;