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


    </>
  );
}


export default MessageRequestsPage;