import React from 'react';
import { useState } from 'react';

import { Restaurant } from './Rest';
import { Food } from './Food';
import '../css/index.css';

import s from '../css/menu/menu.module.css';
import svg from '../images/svg.svg';

import '../js/menu-accordion.js';

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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

  // function showAnswer() {
  //   const questionContainers = document.querySelectorAll('.question-container');

  //   questionContainers.forEach(container => {
  //     const question = container.querySelector('.questions-item-title');
  //     const answer = container.querySelector('.questions-answer');

  //     question.addEventListener('click', () => {
  //       answer.classList.toggle('questions-answer__disabled');
  //     });
  //   });
  // }
  // showAnswer();
  const showAnswer = evt => {
    const answers = evt.currentTarget.querySelectorAll('.questions-answer');

    answers.forEach(answer => {
      answer.classList.toggle('questions-answer__disabled');
    });
  };

  return (
    <React.Fragment>
      <section className="hero">
        <div className="container">
          <div className="hero-left-wrap">
            <div className="sale-wrapper">
              <h1 className="hero-title">
                50% off <span>weekends</span>
              </h1>
              <img
                src={require('../images/dish2.png')}
                alt=""
                className="hero-img"
              />
            </div>
            <form className="hero-search-form">
              <button type="submit" className="hero-btn-submit">
                <svg className="hero-search-submit" width={20.8} height={27.1}>
                  <use></use>
                </svg>
              </button>
              <input
                type="text"
                name="search"
                className="hero-search-input"
                placeholder="Search"
              />
            </form>
            <div className="hero-btn-wrap">
              <a
                href="#Food"
                className="hero-btn-type hero-btn-type__active"
                onClick={() => handleItemClick(2)}
              >
                Food
              </a>
              <a
                href="#Restaurant"
                className="hero-btn-type"
                onClick={() => handleItemClick(1)}
              >
                Restaurant
              </a>
            </div>
          </div>
          <div className="hero-right-wrap"></div>
        </div>
      </section>
      {renderContent()}
      <section className={s.questions}>
        <div className="container">
          <svg className={[s['questions-top-svg']]} width={41} height={38.8}>
            <use href={svg + '#icon-hero-bottom'}></use>
          </svg>
          <h1 className={[s['questions-title']]}>
            Frequently Asked <span>Questions</span>
          </h1>
          <ul className={[s['questions-list']]}>
            <li className="question-container" onClick={showAnswer}>
              <h2 className="questions-item-title">
                How long does delivery take?
              </h2>
              <p className="questions-answer questions-answer__disabled">
                Lorem ipsum
              </p>
            </li>
            <li className="question-container" onClick={showAnswer}>
              <h2 className="questions-item-title">
                How long does delivery take?
              </h2>
              <p className="questions-answer questions-answer__disabled">
                Lorem ipsum
              </p>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};
