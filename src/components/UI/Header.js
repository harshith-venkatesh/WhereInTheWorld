import React from 'react';
import Logo from '../../img/logo.png';
import '../../App.css';
const Header = () => {
  return (
    <header className='center'>
      <img style={{ float: 'left' }} src={Logo} alt='' />
      <div className='typewriter'>
        <h1 className='headerh1'>Where in the World?</h1>
      </div>
    </header>
  );
};

export default Header;
