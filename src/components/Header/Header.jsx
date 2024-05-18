import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({handleMenuClick}) => {
  return (
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
  );
};

export default Header;
