import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({handleMenuClick}) => {
  return (
    <div>
    <h1 className='header'>Teknolojik Yemekler</h1>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Anasayfa
          </NavLink>
        </li>
        <li>
        <NavLink className="menu-link" to="#" onClick={handleMenuClick}>Seçenekler</NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active">
            Sipariş Oluştur
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Header;
