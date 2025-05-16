import useStore from '../../zustand/store'


function Gallery() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);

  return (
    <>
      <h2>Gallery</h2>
      

    </>
  );
}


export default Gallery;