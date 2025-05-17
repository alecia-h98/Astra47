import { NavLink } from 'react-router-dom';
import useStore from '../../zustand/store';
import './Nav.css';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const user = useStore((store) => store.user);
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();

  const logOutFunction = () => {
    logOut();
    navigate('/#/');
  }

  return (
    <nav>
      <ul>
      {/* { // User is not logged in, render these links:
        !user.id && (
          <>
            <li className="glitch" data-text='text'>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="glitch" data-text='text'>
              <NavLink to="/registration">Register</NavLink>
            </li>
          </>
        )
      } */}
      { // User is logged in, render these links:
        user.id && (
          <>
            <li className="glitch" data-text='text'>
              <NavLink to="/photos">Photos</NavLink>
            </li>
            <li className="glitch" data-text='text'>
              <NavLink to="/videos">Videos</NavLink>
            </li>
            <li className="glitch" data-text='text'>
              <NavLink to="/contact/requests">MessageReq</NavLink>
            </li>
            <li className="glitch" data-text='text'>
              <NavLink onClick={logOutFunction} >Log out</NavLink>
            </li>
          </>
        )
      }
     { //If user isn't logged in, render these links:
        !user.id && (
          <>
        <li className="glitch" data-text='text'>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li className="glitch" data-text='text'>
          <NavLink to="/videos">Videos</NavLink>
        </li>
        <li className="glitch" data-text='text'>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="glitch" data-text='text'>
          <NavLink to="/contact">Contact</NavLink>
        </li>
          </>
        )}

      </ul>
    </nav>
  );
}


export default Nav;
