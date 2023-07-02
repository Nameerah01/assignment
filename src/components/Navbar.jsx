import React, { useState } from 'react';
import { HeartFilled, GlobalOutlined, ShoppingFilled, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <img src={Logo} alt="Logo" className="logo" />
      
      <div className={`iconContainer ${isMenuOpen ? 'menu-open' : ''}`}>
        <GlobalOutlined className="icon" />
        <span className='iconText'>India(English).INR</span>
        <HeartFilled className="icon" />
        <ShoppingFilled className="icon" />
      </div>
      
      <div className={`avatar ${isMenuOpen ? 'menu-open' : ''}`}>
        <UserOutlined />
      </div>

      <MenuOutlined className={`menuIcon ${isMenuOpen ? 'menu-open' : ''}`} onClick={handleMenuToggle} />
      
      {isMenuOpen && (
        <div className="menuItems">
          <GlobalOutlined className="menuItem" />
          <span className="menuItemText">India(English).INR</span>
          <HeartFilled className="menuItem" />
          <ShoppingFilled className="menuItem" />
          <UserOutlined className="menuItem" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
