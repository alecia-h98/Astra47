import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';


function PhotosPage() {
  const user = useStore((state) => state.user);
  const photos = useStore((state) => state.photos);
  const glitch = useGlitch();



  return (
    <>
      <h2 className="glitch" data-text='text'>PhotoGallery</h2>
      <div>
        {photos.map((photo) => { 
          return(
            <div key={photo.id} className="photoContainer">
              <img className="photo" src={photo.url} alt={photo.title} />
              <p>{photo.description}</p>
            </div>
          )
        })}
      </div>


    </>
  );
}


export default PhotosPage;