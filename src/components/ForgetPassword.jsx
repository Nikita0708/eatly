import { NavLink } from 'react-router-dom';
import React from 'react';
import svg from '../images/svg.svg';
import '../css/Singning/sign.css';
import s from '../css/Singning/sign.module.css';

export const ForgetPassword = () => {
  return (
    <>
      <div className={s.sign_container}>
        <NavLink exact to="/eatly/" className="sign_logo">
          <svg className={s.sign_svg} width={53} height={49}>
            <use href={svg + '#icon-logo-sign'}></use>
          </svg>
        </NavLink>
        <div className={s.sign_left}>
          <h1 className={s.title_left}>Forget Password</h1>
          <p className={s.email_text}>Enter Your Mail To Reset</p>
          <form className={s.form}>
            <svg className={s.svg_email} width={22.6} height={17.3}>
              <use> href={svg + '#icon-email'}</use>
            </svg>
            <input
              type="email"
              className={s.input}
              name="user-email"
              id="user-email"
              placeholder="Email"
            />
            <button type="submit" className={s.btn_submit}>
              Verify
            </button>
          </form>
          <div className={s.privacy}>
            <span>Privacy Policy</span>
            <span>Copyright 2022</span>
          </div>
        </div>
        <div className={s.sign_right}>
          <div className={[s['hero-right-wrap'], s['preserve']].join(' ')}>
            <img
              src={require('../images/1st.png')}
              alt=""
              className={[s['hero-top-img'], s['level-1'], s['preserve']].join(
                ' '
              )}
            />
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
          </div>
          <div className={s.right_text_wrap}>
            <h1 className={s.right_title}>Find Foods With Love</h1>
            <p className={s.right_text}>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};