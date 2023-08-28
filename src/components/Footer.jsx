import React from 'react';
import { NavLink } from 'react-router-dom';
import svg from '../images/svg.svg';
import '../css/index.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top-wrap">
            <NavLink to="/eatly/" className="footer-logo">
              <svg className="footer-logo-svg" width={112} height={42.3}>
                <use href={svg + '#icon-logo'}></use>
              </svg>
            </NavLink>
            <ul className="footer-list">
              <li className="footer-item">
                <NavLink to="/eatly/Menu/" className="footer-link">
                  Menu
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/eatly/Blog/" className="footer-link">
                  Blog
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/eatly/Pricing/" className="footer-link">
                  Pricing
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/eatly/Contact/" className="footer-link">
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
    </>
  );
};
