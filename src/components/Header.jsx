import React from 'react';
import { MobHeader } from './MobHedaer';
import { NavLink } from 'react-router-dom';
import svg from '../images/svg.svg';
import '../css/index.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink to="/eatly/" className="header-logo">
            <svg className="header-logo-svg" width={112} height={42.3}>
              <use href={svg + '#icon-logo'}></use>
            </svg>
          </NavLink>
          <ul className="header-list">
            <li className="header-item">
              <NavLink to="/eatly/Menu/" className="header-link">
                Menu
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink to="/eatly/Blog/" className="header-link">
                Blog
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink to="/eatly/Pricing/" className="header-link">
                Pricing
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink to="/eatly/Contact/" className="header-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="header-btn-wrap">
            <NavLink to="/eatly/LogIn/">
              <button type="button" className="header-login">
                Login
              </button>
            </NavLink>
            <NavLink to="/eatly/SignUp/">
              <button type="button" className="header-sign-up">
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      </header>
      <MobHeader />
    </>
  );
};
