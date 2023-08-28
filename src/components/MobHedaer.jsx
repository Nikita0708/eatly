import s from '../css/main/mobheader.module.css';
import svg from '../images/svg.svg';
import { NavLink } from 'react-router-dom';
import '../css/main/main.css';

export const MobHeader = () => {
  const handleModal = () => {
    const modal = document.querySelector('.mob-menu');
    modal.classList.toggle('is-hidden');
  };
  return (
    <header className={s.header}>
      <div className="container">
        <NavLink to="/eatly/" className="header-logo">
          <svg className="header-logo-svg" width={112} height={42.3}>
            <use href={svg + '#icon-logo'}></use>
          </svg>
        </NavLink>
        <button type="button" className={s.menu_open_btn} onClick={handleModal}>
          <svg className={s.menu_open_svg} width={31.5} height={22.3}>
            <use href={svg + '#icon-menu'}></use>
          </svg>
        </button>
      </div>
      <div className="mob-menu is-hidden">
        <div className="mob_container">
          <button
            type="button"
            className="menu-close-btn"
            onClick={handleModal}
          >
            <svg className="menu-icon" width={18} height={18}>
              <use href={svg + '#icon-menu-close-svg'}></use>
            </svg>
          </button>
          <ul className="mob-menu-list">
            <li className="mob-menu-item">
              <NavLink
                to="/eatly"
                className="mob-menu-link"
                onClick={handleModal}
              >
                Main
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/Menu/"
                className="mob-menu-link"
                onClick={handleModal}
              >
                Menu
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/Blog/"
                className="mob-menu-link"
                onClick={handleModal}
              >
                Blog
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/Pricing/"
                className="mob-menu-link"
                onClick={handleModal}
              >
                Pricing
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/Contact/"
                className="mob-menu-link"
                onClick={handleModal}
              >
                Contact
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/login/"
                className="mob-menu-sign"
                onClick={handleModal}
              >
                Log in
              </NavLink>
            </li>
            <li className="mob-menu-item">
              <NavLink
                to="/eatly/signup/"
                className="mob-menu-sign"
                onClick={handleModal}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
