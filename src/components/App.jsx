import { useState } from "react";
import { Menu } from 'components/Menu';
import { Main } from 'components/Main';
import { Blog } from 'components/Blog';
import { Pricing } from 'components/Pricing';
import { Contact } from 'components/Contact';
 
import svg from '../images/svg.svg';



export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const renderContent = () => {
    switch (selectedItem) {
      case 1:
        return <Main />;
      case 2:
        return <Menu />;
      case 3:
        return <Blog />;
      case 4:
        return <Pricing />;
      case 5:
        return <Contact />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="wrapper">
    <header className="header">
      <div className="container">
        <a href="#" onClick={() => handleItemClick(1)} className="header-logo">
          <svg className="header-logo-svg" width={112} height={42.3}>
            <use href={svg + '#icon-logo'}></use>
          </svg>
        </a>
        <ul className="header-list">
          <li className="header-item">
            <a href="#" className="header-link" onClick={() => handleItemClick(2)}>Menu</a>
          </li>
          <li className="header-item">
            <a href="#" className="header-link" onClick={() => handleItemClick(3)}>Blog</a>
          </li>
          <li className="header-item">
            <a href="#" className="header-link" onClick={() => handleItemClick(4)}>Pricing</a>
          </li>
          <li className="header-item">
            <a href="#" className="header-link" onClick={() => handleItemClick(5)}>Contact</a>
          </li>
        </ul>
          <div className="header-btn-wrap">
            <button type="button" className="header-login">Login</button>
            <button type="button" className="header-sign-up">Sign up</button>
          </div>
      </div>
      </header>
      {renderContent()}
      <footer className="footer">
        <div className="container">
          <div className="footer-top-wrap">
            <a href="#" onClick={() => handleItemClick(1)} className="footer-logo">
            <svg className="footer-logo-svg" width={112} height={42.3}>
              <use href={svg + '#icon-logo'}></use>
            </svg>
            </a>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link" onClick={() => handleItemClick(2)}>Menu</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link" onClick={() => handleItemClick(3)}>Blog</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link" onClick={() => handleItemClick(4)}>Pricing</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link" onClick={() => handleItemClick(5)}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-wrap">
            <span className="footer-rights">© 2023 EATLY All Rights Reserved.</span>
            <ul className="footer-socials">
              <li className="footer-soc-item">
                <a href="" className="footer-soc-link">
                  <svg className="footer-soc-svg" width={21.4}  height={21.4}>
                    <use href={svg + '#icon-instagram'}></use>
                  </svg>
                </a>
              </li>
              <li className="footer-soc-item">
                <a href="" className="footer-soc-link">
                  <svg className="footer-soc-svg" width={21.4} height={21.4}>
                    <use href={svg + '#icon-linkedin'}></use>
                  </svg>
                </a>
              </li>
              <li className="footer-soc-item">
                <a href="" className="footer-soc-link">
                  <svg className="footer-soc-svg" width={21.4} height={21.4}>
                    <use href={svg + '#icon-facebook'}></use>
                  </svg>
                </a>
              </li>
              <li className="footer-soc-item">
                <a href="" className="footer-soc-link">
                  <svg className="footer-soc-svg" width={21.4} height={21.4}>
                    <use href={svg + '#icon-twitter'}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
    
  );
};
