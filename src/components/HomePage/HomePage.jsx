import useStore from '../../zustand/store'
import { use, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const getRandomPhoto = useStore((state) => state.getRandomPhoto);
  const randomPhoto = useStore((state) => state.randomPhoto);
  const fetchPhotos = useStore((state) => state.fetchPhotos);

  useEffect(() => {
    async function loadPhotos() {
      await fetchPhotos();
      getRandomPhoto();
    }
    loadPhotos();
  }, [fetchPhotos, getRandomPhoto]);

  //big photo or video when the page loads
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
      <h2 className="glitch" data-text='text'>HomePage</h2>
      {user.id ? (
        <>
        <p>Welcome back {user.username}!</p>
        <button onClick={logOut}>
          Log Out
        </button>
        </>) : (<p>Welcome to Astra47!</p>)}
        <div>
          {/* The photos for this need to be updated to only fill the size of the homepage */}
      {/* <Image src={randomPhoto.cloudinary_url} alt="photo" fluid /> */}
      </div>
      </div>
    </>
  );
};


export default HomePage;
