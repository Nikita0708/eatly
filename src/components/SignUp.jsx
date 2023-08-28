import { Link } from 'react-router-dom';
import React from 'react';
import svg from '../images/svg.svg';
import '../css/Singning/sign.css';
import s from '../css/Singning/sign.module.css';
import { useNavigate } from 'react-router';

export const SignUp = () => {
  const hist = useNavigate();
  const goBack = () => {
    hist(-1);
  };
  return (
    <>
      <div className={s.sign_container}>
        <div className={s.sign_left}>
          <button onClick={goBack} type="btn" className={s.sign_logo}>
            <svg className={s.sign_svg} width={53} height={49}>
              <use href={svg + '#icon-logo-sign'}></use>
            </svg>
            Back
          </button>
          <h1 className={s.title_left}>Sign Up To eatly</h1>
          <div className={s.btn_wrap}>
            <button type="button" className={s.btn}>
              <svg className={s.btn_svg} width={25} height={30}>
                <use href={svg + '#icon-google'}></use>
              </svg>
            </button>
            <button type="button" className={s.btn}>
              <svg className={s.btn_svg} width={25} height={30}>
                <use href={svg + '#icon-apple'}></use>
              </svg>
            </button>
          </div>
          <span className={s.mid_span}>or</span>
          <form className={s.form}>
            <div className={s.input_wrap}>
              <svg className={s.svg_name} width={20.6} height={22.5}>
                <use href={svg + '#icon-user'}></use>
              </svg>
              <input
                type="text"
                className={s.input}
                name="user-name"
                id="user-name"
                placeholder="full name"
              />
            </div>
            <div className={s.input_wrap}>
              <svg className={s.svg_email} width={22.6} height={17.3}>
                <use href={svg + '#icon-email'}></use>
              </svg>
              <input
                type="email"
                className={s.input}
                name="user-email"
                id="user-email"
                placeholder="Email"
              />
            </div>
            <div className={s.input_wrap}>
              <svg className={s.svg_pass} width={18.4} height={23.7}>
                <use href={svg + '#icon-password'}></use>
              </svg>
              <input
                type="password"
                className={s.input}
                name="user-password"
                id="user-password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className={s.btn_submit}>
              sign up
            </button>
          </form>
          <p className={s.bottom_text}>
            Already Have An Account?
            <Link to="/eatly/LogIn" className={s.bottom_link}>
              Log In
            </Link>
          </p>
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
