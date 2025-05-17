import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';
import React from 'react';
import { useState } from 'react';

function MessageRequestsPage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const glitch = useGlitch();
  

  return (
    <>
      <h2 className="glitch" data-text='text'>Contact Requests:</h2>
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