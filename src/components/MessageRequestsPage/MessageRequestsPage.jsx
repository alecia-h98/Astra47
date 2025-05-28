import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './MessageRequestsPage.css';
// import { Form } from 'react-bootstrap';

function MessageRequestsPage() {
  const user = useStore((state) => state.user);
  const glitch = useGlitch();
  const fetchContactMessages = useStore((state) => state.fetchContactMessages);
  const contactMessages = useStore((state) => state.contactMessages);
  const params = useParams();
  // const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    fetchContactMessages();
  },[fetchContactMessages]);



  return (
    <>
      <h2 className="glitch" data-text='text'>Contact Requests:</h2>
      <div id="message-requests">
        {contactMessages.map((message) => {
          return(
            <div className='specific-message-req'>
              <h4>{message.name}</h4>
              <p>{message.email}</p>
              <p>{message.message}</p>
              {/* <Form.Check
              type="switch"
              id="archive-switch"
              label={showArchived ? "🔴 Not responded" : "🟢 Responded"}
              checked={showArchived}
              onChange={() => setShowArchived(!showArchived)}
              /> */}
            </div>
          )
        })}
      </div>
      {/* <section className='message-requests'>
        {user.messageRequests.map((request) => (
          <div className='message-request' key={request.id}>
            <img src={request.profilePicture} alt={request.name} />
            <h3>{request.name}</h3>
            <button onClick={() => request.accept()}>Accept</button>
            <button onClick={() => request.decline()}>Decline</button>
          </div>
        ))} */}

    </>
  );
}


export default MessageRequestsPage;