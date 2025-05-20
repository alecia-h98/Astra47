import useStore from '../../zustand/store'


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);

  //big photo or video when the page loads
//Get a quote link to the contact page
//about bio 
//leave a review questionaire at the bottom of the page

  return (
    <>
      <h2 className="glitch" data-text='text'>HomePage</h2>
      {user.id ? (
        <>
        <p>Welcome back {user.username}!</p>
        <button onClick={logOut}>
          Log Out
        </button>
        </>) : (<p>Welcome to Astra47!</p>)}

    </>
  );
};


export default HomePage;
