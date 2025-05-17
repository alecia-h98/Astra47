import { NavLink } from 'react-router-dom';
import useStore from '../../zustand/store';
import './Nav.css';


function Nav() {
  const user = useStore((store) => store.user);

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
              <NavLink to="/">Home</NavLink>
            </li>
          </>
        )
      }
      {/* Show these links regardless of auth status: */}
        <li className="glitch" data-text='text'>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="glitch" data-text='text'>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="glitch" data-text='text'>
          text
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
