import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
      <div className='container'>
        <a className='navbar-brand' href='landing.html'>
          XMeme
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#mobile-nav'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='mobile-nav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='register.html'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='login.html'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
