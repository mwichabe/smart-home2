import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext} from '../context/userContext';

const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <Link className='navbar-brand' to='/'>
        <i className='fas fa-cash-register' /> Smart Home
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          {user.userType === 'Sales Manager' && (
            <li className='nav-item'>
              <NavLink className='nav-link' to='/products' activeClassName='active'>
                Products
              </NavLink>
            </li>
          )}
          {user.userType === 'Customer' && (
            <li className='nav-item'>
              <NavLink className='nav-link' to='/customers' activeClassName='active'>
                Customers
              </NavLink>
            </li>
          )}
        </ul>
        <ul className='navbar-nav float-right'>
        {user.name ? (
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Welcome, {user.name} ({user.userType})
              </NavLink>
            </li>
          ) : (
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login' activeClassName='active'>
                {user.name}
              </NavLink>
            </li>
          )}
          <li className='nav-item'>
            <NavLink className='nav-link' to='/register' activeClassName='active'>
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;