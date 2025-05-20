import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import logo from '/images/logo.png';
import './App.css';
import useStore from '../../zustand/store';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import AppLayout from '../AppLayout/AppLayout';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import PhotosPage from '../PhotosPage/PhotosPage';
import VideosPage from '../VideosPage/VideosPage';
import ContactPage from '../ContactPage/ContactPage';
import MessageRequestsPage from '../MessageRequestsPage/MessageRequestsPage';
import AddPhotoPage from '../AddPhotoPage/AddPhotoPage';
import { useGlitch } from 'react-powerglitch';
import { useNavigate } from 'react-router-dom';

function App() {
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);
  const fetchContactMessages = useStore((state) => state.fetchContactMessages);
  const fetchPhotos = useStore((state) => state.fetchPhotos);
  const glitch = useGlitch();
  const navigate = useNavigate();


  useEffect(() => {
    fetchUser();
    fetchContactMessages();
    fetchPhotos();
  }, [fetchUser, fetchContactMessages, fetchPhotos]);



  const homepage = (event) => {
    navigate(`/`)
  };

  return (
    <>
      <header>
        <h1 onClick={homepage} className="headerName" ><span ref={glitch.ref}>_Astra47<img className="logoHeader" src={logo} /> </span></h1>
        <Nav />
      </header>
      <main>
        
      
        <Routes>
          {/* <Route 
            exact path="/"
            element={
                <HomePage /> // Render HomePage for authenticated user.
            }
          /> */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/photos" element= {<PhotosPage />} />
          <Route path="/videos" element= {<VideosPage />} />
          <Route path="/contact" element= {<ContactPage />} />
          <Route path="/contact/requests" element= {<MessageRequestsPage />} />
          <Route path="/photos/new" element= {<AddPhotoPage />} />

          <Route 
            exact path="/about"
            element={
              <>
                <h2 className="glitch" data-text='text'>AboutMe</h2>
                <p>
                  Intelligence doesn’t seem like an aspect of personal character, and it isn’t.
                  Coincidentally, great intelligence is only loosely connected to being a good programmer.
                </p>
                <p>
                  What? You don’t have to be superintelligent?
                </p>
                <p>
                  No, you don’t. Nobody is really smart enough to program computers.
                  Fully understanding an average program requires an almost limitless capacity
                  to absorb details and an equal capacity to comprehend them all at the same time.
                  The way you focus your intelligence is more important than how much intelligence you have…
                </p>
                <p>
                  …most of programming is an attempt to compensate for the strictly limited size of our skulls.
                  The people who are the best programmers are the people who realize how small their brains are.
                  They are humble. The people who are the worst at programming are the people who refuse to
                  accept the fact that their brains aren’t equal to the task.
                  Their egos keep them from being great programmers.
                  The more you learn to compensate for your small brain, the better a programmer you’ll be.
                  <span className="squiggle"> The more humble you are, the faster you’ll improve.</span>
                </p>
                <p>
                  --From Steve McConnell's <em>Code Complete</em>.
                </p>
              </>
            }
          />
          </Route>
          <Route
            path="*"
            element={
              <h2>404 Page</h2>
            } 
          />
        </Routes>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}


export default App;
