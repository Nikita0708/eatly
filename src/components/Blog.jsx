import s from '../css/blog/blog.module.css';
import { Sale } from './Sale';
import { Questions } from './Questions';
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/index.css';

import { NavLink } from 'react-router-dom';

export const Blog = () => {
  return (
    <>
      <Header />
      <Sale />
      <section className={s.articles}>
        <div className={s.container}>
          <h1 className={s.articles_title}>
            Latest <span>Articles</span>
          </h1>
          <ul className={s.articles_list}>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog1.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>How To Order Food ?</h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog2.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>
                  How To Track The Order ?
                </h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog3.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>How To Manage Cards ?</h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog4.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>
                  Tips & Tricks For Business
                </h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog5.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>
                  How To Control Money ?
                </h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/eatly/Article" className={s.articles_link}>
              <li className={s.articles_item}>
                <img
                  src={require('../images/blog6.jpg')}
                  alt=""
                  className={s.articles_img}
                />
                <h2 className={s.articles_item_title}>Top 5 Business Ideas</h2>
                <div className={s.articles_wrap}>
                  <img
                    src={require('../images/creator.jpg')}
                    alt=""
                    className={s.articles_item_img}
                  />
                  <div className={s.articles_thumb}>
                    <span className={s.articles_creator_top}>Written By</span>
                    <span className={s.articles_creator}>Perperzon</span>
                  </div>
                  <span className={s.articles_time}>15 DEC, 2022</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </section>
      <Questions />
      <Footer />
    </>
  );
};
