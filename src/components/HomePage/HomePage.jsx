import useStore from '../../zustand/store'


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);




  return (
    <>
      <h2>Home Page</h2>
      <p>Welcome back {user.username}!</p>
      <button onClick={logOut}>
        Log Out
      </button>
    </>
  );
};


export default HomePage;
