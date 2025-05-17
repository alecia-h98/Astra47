import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';


function Gallery() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const glitch = useGlitch();

  return (
    <>
      <h2 className="glitch" data-text='text'><span ref={glitch.ref}>Gallery</span></h2>


    </>
  );
}


export default Gallery;