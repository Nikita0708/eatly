import React, { useEffect } from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Restaurant } from './Rest';
import { Food } from './Food';
import { Questions } from './Questions';
import '../css/index.css';
import '../css/menu/menu.css';
import s from '../css/menu/menu.module.css';
import svg from '../images/svg.svg';

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const handleItemClick = item => {
    setSelectedItem(item);
  };
  const renderContent = () => {
    switch (selectedItem) {
      case 1:
        return <Restaurant />;
      case 2:
        return <Food />;
      default:
        return <Restaurant />;
    }
  };

  useEffect(() => {
    const defaultSelectedElement = document.getElementById('defaul_el');
    if (defaultSelectedElement) {
      defaultSelectedElement.classList.add('hero-btn-type__active');
      setSelectedElement(defaultSelectedElement);
    }
  }, []);

  const handleElementClick = event => {
    const clickedElement = event.currentTarget;
    if (selectedElement) {
      selectedElement.classList.remove('hero-btn-type__active');
    }
    clickedElement.classList.add('hero-btn-type__active');
    setSelectedElement(clickedElement);
  };

  const handleSortClick = event => {
    const clickedElement = event.currentTarget;
    if (selectedSort) {
      selectedSort.classList.remove('right_sort__active');
    }
    clickedElement.classList.add('right_sort__active');
    setSelectedSort(clickedElement);
  };

  const handleTypeClick = event => {
    const clickedElement = event.currentTarget;
    if (selectedType) {
      selectedType.classList.remove('right_item__active');
    }
    clickedElement.classList.add('right_item__active');
    setSelectedType(clickedElement);
  };

  return (
    <React.Fragment>
      <Header />
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.hero_left_wrap}>
            <svg className={s.hero_top_svg} width={51.8} height={36.4}>
              <use href={svg + '#icon-menu-hero'}></use>
            </svg>
            <div className={s.sale_wrapper}>
              <h1 className={s.hero_title}>
                50% off <span>weekends</span>
              </h1>
              <img
                src={require('../images/dish2.png')}
                alt=""
                className={s.hero_img}
              />
            </div>
            <div className={s.form_wrapper}>
              <form className={s.form}>
                <button type="submit" className={s.form_btn}>
                  <svg className={s.form_svg} width={30} height={27.1}>
                    <use href={svg + '#icon-search-menu'}></use>
                  </svg>
                </button>
                <input
                  type="text"
                  name="search"
                  className={s.form_input}
                  placeholder="Search"
                />
              </form>
              <div className={s.hero_btn_wrap}>
                <div className="hero-btn-type" onClick={handleElementClick}>
                  <a
                    href="#Food"
                    className="hero_link"
                    onClick={() => {
                      handleItemClick(2);
                    }}
                  >
                    Food
                  </a>
                </div>
                <div
                  onClick={handleElementClick}
                  className="hero-btn-type"
                  id="defaul_el"
                >
                  <a
                    href="#Restaurant"
                    className="hero_link"
                    onClick={() => handleItemClick(1)}
                  >
                    Restaurant
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={s.hero_right_wrap}>
            <h2 className={s.hero_right_title}>Category</h2>
            <ul className={s.right_list}>
              <li className="right_item" onClick={handleTypeClick}>
                <svg className={s.right_svg_first} width={34.6} height={34.6}>
                  <use href={svg + '#icon-pizza'}></use>
                </svg>
                <span>Pizza</span>
              </li>
              <li className="right_item" onClick={handleTypeClick}>
                <svg className={s.right_svg_sec} width={45} height={40}>
                  <use href={svg + '#icon-hotdog'}></use>
                </svg>
                <span>Asian</span>
              </li>
              <li className="right_item" onClick={handleTypeClick}>
                <svg className={s.right_svg_third} width={34.6} height={34.6}>
                  <use href={svg + '#icon-doughnut'}></use>
                </svg>
                <span>Donat</span>
              </li>
              <li className="right_item" onClick={handleTypeClick}>
                <svg className={s.right_svg_fourth} width={22.1} height={41.2}>
                  <use href={svg + '#icon-icecream'}></use>
                </svg>
                <span>Ice</span>
              </li>
            </ul>
            <h2 className={s.second_right_title}>Sort By</h2>
            <div className={s.sort_wrap}>
              <span className="right_sort" onClick={handleSortClick}>
                Recomended
              </span>
              <span className="right_sort" onClick={handleSortClick}>
                Most Popular
              </span>
              <span className="right_sort" onClick={handleSortClick}>
                Fast Delivery
              </span>
            </div>
            <h2 className={s.third_right_title}>Price</h2>
            <input
              type="range"
              min="0"
              max="1000"
              step={25}
              className={s.right_range}
            />
            <ul className={s.right_range_list}>
              <li className={s.range_item}>$0</li>
              <li className={s.range_item}>$25</li>
              <li className={s.range_item}>$50</li>
              <li className={s.range_item}>$100</li>
              <li className={s.range_item}>$500</li>
              <li className={s.range_item}>$1000</li>
            </ul>
            <button type="button" className={s.right_btn}>
              Apply
            </button>
          </div>
        </div>
      </section>
      {renderContent()}
      <Questions />
      <Footer />
    </React.Fragment>
  );
};
