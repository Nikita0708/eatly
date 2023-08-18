import { Restaurant } from './Rest';
import { Food } from './Food';
import { Control } from './Control';
import { Customer } from './Customer';
import { Sale } from './Sale';
import { Header } from './Header';
import { Footer } from './Footer';
import React from 'react';
import svg from '../images/svg.svg';

import '../js/tilt-anim.js';
import '../css/index.css';

import s from '../css/main/main.module.css';
import '../css/main/slider.css';

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="hero-tilt-animation">
        <div className="hero-tilt-container container">
          <div className={[s['hero-left-wrap'], s['preserve']].join(' ')}>
            <p className={[s['hero-top-text'], s['preserve']].join(' ')}>
              over 1000 users
            </p>
            <h1
              className={[s['hero-title'], s['level-1'], s['preserve']].join(
                ' '
              )}
            >
              Enjoy Foods All Over The <span>World</span>
            </h1>
            <p className={[s['hero-bottom-text'], s['preserve']].join(' ')}>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span>$20 bonus</span>.
            </p>
            <div
              className={[s['hero-btn-wrap'], s['level-1'], s['preserve']].join(
                ' '
              )}
            >
              <button
                type="button"
                className={[s['hero-get-started'], s['preserve']].join(' ')}
              >
                Get Started
              </button>
              <button
                type="button"
                className={[s['hero-go-pro'], s['preserve']].join(' ')}
              >
                Go Pro
              </button>
            </div>
            <div className={[s['hero-bottom-wrap'], s['preserve']].join(' ')}>
              <svg
                className={[
                  s['hero-trustpilot-svg'],
                  s['level-1'],
                  s['preserve'],
                ].join(' ')}
                width={123}
                height={30.2}
              >
                <use href={svg + '#icon-trustpilot'}></use>
              </svg>
              <svg
                className={[s['hero-stars-svg'], s['preserve']].join(' ')}
                width={95.8}
                height={15.3}
              >
                <use href={svg + '#icon-stars'}></use>
              </svg>
              <span
                className={[
                  s['hero-btn-number'],
                  s['level-1'],
                  s['preserve'],
                ].join(' ')}
              >
                4900+
              </span>
            </div>
          </div>
          <div className={[s['hero-right-wrap'], s['preserve']].join(' ')}>
            <svg
              className={[s['hero-top-svg'], s['preserve']].join(' ')}
              width={41.5}
              height={24}
            >
              <use href={svg + '#icon-hero-top'}></use>
            </svg>
            <img
              src={require('../images/1st.png')}
              alt=""
              className={[s['hero-top-img'], s['level-1'], s['preserve']].join(
                ' '
              )}
            />
            <div
              className={[
                s['hero-main-img-wrap'],
                s['level--1'],
                s['preserve'],
              ].join(' ')}
            ></div>
            <img
              src={require('../images/hero-img.png')}
              alt=""
              className={s['hero-img']}
            />
            <img
              src={require('../images/Graph.png')}
              alt=""
              className={[
                s['hero-bottom-img'],
                s['level-1'],
                s['preserve'],
              ].join(' ')}
            />
            <svg
              className={[s['hero-bottom-svg'], s['preserve']].join(' ')}
              width={38.1}
              height={33}
            >
              <use href={svg + '#icon-hero-bottom'}></use>
            </svg>
          </div>
        </div>
      </section>
      <section className={s.info}>
        <div className={s.container}>
          <h1 className="visually-hidden">Information</h1>
          <ul className="info-list">
            <li className={[s['info-item']]}>
              <span className={[s['info-item-span']]}>10K+</span>
              <p className={[s['info-item-text']]}>
                Satisfied Costumers All Great Over The World
              </p>
            </li>
            <li className={[s['info-item']]}>
              <span className={[s['info-item-span']]}>4M</span>
              <p className={[s['info-item-text']]}>
                Healthy Dishes Sold Including Milk Shakes Smooth
              </p>
            </li>
            <li className={[s['info-item']]}>
              <span className={[s['info-item-span']]}>99.99%</span>
              <p className={[s['info-item-text']]}>
                Reliable Customer Support We Provide Great Experiences
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={s.mobile}>
        <div className={s.container}>
          <div className={[s['mobile-left-wrap']]}>
            <svg className={[s['mobile-left-svg']]} width={52.5} height={61.7}>
              <use href={svg + '#icon-Illustration-01-1'}></use>
            </svg>
            <img
              src={require('../images/mobile.png')}
              alt="mobile application"
              className={s.mobile_img}
            />
          </div>
          <div className={[s['mobile-right-wrap']]}>
            <h1 className={[s['mobile-title']]}>
              Premium <span>Quality</span> For Your Health
            </h1>
            <ul className={[s['mobile-list']]}>
              <li className={[s['mobile-item']]}>
                <p className={[s['mobile-text']]}>
                  Premium quality food is made with ingredients that are packed
                  with essential vitamins, minerals.
                </p>
              </li>
              <li className={[s['mobile-item']]}>
                <p className={[s['mobile-text']]}>
                  These foods promote overall wellness by support healthy
                  digestion and boosting immunity
                </p>
              </li>
            </ul>
            <button type="button" className={[s['mobile-download']]}>
              <p>Download</p>
              <svg className={[s['download-svg']]} width={27.1} height={27.1}>
                <use href={svg + '#icon-arrow-right'}></use>
              </svg>
              <svg className={[s['mobile-right-svg']]} width={154} height={87}>
                <use href={svg + '#icon-arrow'}></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Restaurant />
      <Food />
      <Control />
      <Customer />
      <Sale />
      <Footer />
    </React.Fragment>
  );
};
