import { Menu } from 'components/Menu';
import { Main } from 'components/Main';
import { Blog } from 'components/Blog';
import { Pricing } from 'components/Pricing';
import { Contact } from 'components/Contact';
import { Article } from './Article';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import svg from '../images/svg.svg';
import '../css/index.css';

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <header className="header">
          <div className="container">
            <NavLink exact to="/eatly/" className="header-logo">
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
                <NavLink exact to="/eatly/Blog/" className="header-link">
                  Blog
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink exact to="/eatly/Pricing/" className="header-link">
                  Pricing
                </NavLink>
              </li>
              <li className="header-item">
                <NavLink exact to="/eatly/Contact/" className="header-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="header-btn-wrap">
              <button type="button" className="header-login">
                Login
              </button>
              <button type="button" className="header-sign-up">
                Sign up
              </button>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/eatly/" element={<Main />} />
          <Route path="/eatly/Menu" element={<Menu />} />
          <Route path="/eatly/Contact" element={<Contact />} />
          <Route path="/eatly/Blog" element={<Blog />} />
          <Route path="/eatly/Pricing" element={<Pricing />} />
          <Route path="/eatly/Article" element={<Article />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <div className="footer-top-wrap">
              <NavLink exact to="/eatly/" className="footer-logo">
                <svg className="footer-logo-svg" width={112} height={42.3}>
                  <use href={svg + '#icon-logo'}></use>
                </svg>
              </NavLink>
              <ul className="footer-list">
                <li className="footer-item">
                  <NavLink exact to="/eatly/Menu/" className="footer-link">
                    Menu
                  </NavLink>
                </li>
                <li className="footer-item">
                  <NavLink exact to="/eatly/Blog/" className="footer-link">
                    Blog
                  </NavLink>
                </li>
                <li className="footer-item">
                  <NavLink exact to="/eatly/Pricing/" className="footer-link">
                    Pricing
                  </NavLink>
                </li>
                <li className="footer-item">
                  <NavLink exact to="/eatly/Contact/" className="footer-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-wrap">
              <span className="footer-rights">
                © 2023 EATLY All Rights Reserved.
              </span>
              <ul className="footer-socials">
                <li className="footer-soc-item">
                  <a href="/" className="footer-soc-link" target="_blank">
                    <svg className="footer-soc-svg" width={21.4} height={21.4}>
                      <use href={svg + '#icon-instagram'}></use>
                    </svg>
                  </a>
                </li>
                <li className="footer-soc-item">
                  <a href="/" className="footer-soc-link" target="_blank">
                    <svg className="footer-soc-svg" width={21.4} height={21.4}>
                      <use href={svg + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </li>
                <li className="footer-soc-item">
                  <a href="/" className="footer-soc-link" target="_blank">
                    <svg className="footer-soc-svg" width={21.4} height={21.4}>
                      <use href={svg + '#icon-facebook'}></use>
                    </svg>
                  </a>
                </li>
                <li className="footer-soc-item">
                  <a href="/" className="footer-soc-link" target="_blank">
                    <svg className="footer-soc-svg" width={21.4} height={21.4}>
                      <use href={svg + '#icon-twitter'}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Router>
    </React.Fragment>
  );
};
