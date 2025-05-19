import useStore from '../../zustand/store'
import { useGlitch } from 'react-powerglitch';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './PhotosPage.css';

function PhotosPage() {
  const user = useStore((state) => state.user);
  const photos = useStore((state) => state.photos);
  const glitch = useGlitch();
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };


  const adminPhotoPage = () => {
      navigate('/photos/new')
  }
  

  return (
    <>
      <h2 className="glitch" data-text='text'>PhotoGallery</h2>
      { // User is logged in, render these links:
        user.id && (
      <button onClick={adminPhotoPage} >Add photo</button>
        )}
      <div>
      <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                 >
        {photos.map((photo) => { 
          return(
            <div key={photo.id} className="photoContainer">

                  <img src={photo.cloudinary_url} alt={photo.title} className="gallery-img" />
                  { // User is logged in, render these links:
                  user.id && (
                  <button onClick={adminPhotoPage} >Delete</button>
                  )}
              {/* <img className="photo-img" src={photo.cloudinary_url} alt={photo.title} /> */}
              {/* <p>{photo.description}</p> */}
              
            </div>
          )
        })}
      </Masonry>
      </div>


    </>
  );
}


export default PhotosPage;