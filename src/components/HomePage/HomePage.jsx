import useStore from '../../zustand/store'
import { use, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './HomePage.css';
import { useGlitch } from 'react-powerglitch';
import logo from '/images/logo.png';


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const getRandomPhoto = useStore((state) => state.getRandomPhoto);
  const randomPhoto = useStore((state) => state.randomPhoto);
  const fetchPhotos = useStore((state) => state.fetchPhotos);
  const glitch = useGlitch();

  useEffect(() => {
    async function loadPhotos() {
      await fetchPhotos();
      getRandomPhoto();
    }
    loadPhotos();
  }, [fetchPhotos, getRandomPhoto]);

//have an about that goes over what he specializes in
//Get a quote link to the contact page
//about bio 
//leave a review questionaire at the bottom of the page

if (!randomPhoto) {
  return <div className="text-center mt-5">Loading...</div>;
}

  return (
    <>
    <div className="background">
      {user.id ? (
        <>
        <p>Welcome back {user.username}!</p>
        <button  onClick={logOut}>
          Log Out
        </button>
        </>) : ( <h1 className='titleHomepage'><span ref={glitch.ref}>_Astra47</span></h1>)}
        <div>
      </div>
      </div>
    </>
  );
};


export default HomePage;
