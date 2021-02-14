import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='bg-dark text-white mt-5 p-4 text-center'>
        <p>Made by Shubham Shukla with ❤️</p>
        Copyright &copy; {new Date().getFullYear()} XMeme
      </footer>
    </div>
  );
};

export default Footer;
