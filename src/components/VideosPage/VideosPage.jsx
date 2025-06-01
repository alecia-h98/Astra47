import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';
import filePhoto from '/images/glitchyFolder.png';
import manillaFolder from '/images/glitchyManilla.png';
import './VideosPage.css';
import InstaReelsPage from '../InstaReelsPage/InstaReelsPage';
import YoutubeVideosPage from '../YoutubeVideosPage/YoutubeVideosPage';
import { useNavigate } from 'react-router-dom';

function VideosPage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const glitch = useGlitch();
  const navigate = useNavigate();



  const handleInstaReelsClick = () => {
    navigate('/videos/instareels');
  };

  const handleYoutubeVideosClick = () => {
    navigate('/videos/youtube');
  };
  
  return (
    <>
      <h2 className="glitch" data-text='text'>VideosPage</h2>
      <br/>
      <div className="videosDiv" onClick={handleInstaReelsClick} >
      <span ref={glitch.ref}>
      <img src={filePhoto} className="filePhoto" />
      </span>
      <h4>Instagram Reels</h4>
      </div>
      <div className="videosDiv" onClick={handleYoutubeVideosClick} >
      <span ref={glitch.ref}>
      <img src={filePhoto} className="filePhoto" />
      </span>
      <h4>Music Videos</h4>
      </div>


    </>
  );
}


export default VideosPage;