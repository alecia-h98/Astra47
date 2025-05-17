import useStore from '../../zustand/store'


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);




  return (
    <>
      <h2 className="glitch" data-text='text'>Home Page</h2>
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
