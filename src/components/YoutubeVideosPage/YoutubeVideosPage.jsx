import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';

function YoutubeVideosPage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const glitch = useGlitch();

  return (
    <>
      <h2 className="glitch" data-text='text'>YoutubeVideosPage</h2>
    </>
  );
}


export default YoutubeVideosPage;