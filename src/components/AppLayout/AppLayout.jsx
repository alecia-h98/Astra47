// src/components/AppLayout/AppLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function AppLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800); // simulate load time

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <header>
        {/* <Nav /> */}
      </header>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </>
  );
}

export default AppLayout;
