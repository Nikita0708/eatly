import s from '../css/article/article.module.css';
import '../css/index.css';
import svg from '../images/svg.svg';
import { Header } from './Header';
import { Footer } from './Footer';
export const Article = () => {
  return (
    <>
      <Header />
      <section className={s.article}>
        <div className={s.container}>
          <h1 className={s.article_title}>How To Order Food On eatly?</h1>
          <div className={s.article_wrap}>
            <img
              src={require('../images/creator.jpg')}
              alt=""
              className={s.article_item_img}
            />
            <div className={s.article_thumb}>
              <span className={s.top_span}>Written By</span>
              <span className={s.author}>Perperzon</span>
            </div>
          </div>
          <img
            src={require('../images/article.jpg')}
            alt=""
            className={s.article_img}
          />
          <div className={s.article_main}>
            <div className={s.article_left_side}>
              <h2 className={s.article_left_title}>
                Browse restaurants and menus
              </h2>
              <p className={s.article_text}>
                Once you're logged in, you can browse through the list of
                available restaurants on the Eatly website. You can filter by
                cuisine, price, and distance to find the perfect restaurant for
                your needs. Click on a restaurant to view its menu. Once you're
                logged in, you can browse through the list of available
                restaurants on the Eatly website. You can filter by cuisine,
                price, and distance.
              </p>

              <ul className={s.article_list}>
                <li className={s.article_item}>
                  It was popularized in the 1960s with the release
                </li>
                <li className={s.article_item}>
                  Lorem Ipsum passages, and more recently
                </li>
              </ul>
              <img
                src={require('../images/article-mob.jpg')}
                alt=""
                className={s.article_mob_img}
              />
              <h2 className={s.article_left_title}>Select your items</h2>
              <p className={s.article_text_sec}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable sourcee.
              </p>
              <h2 className={s.article_left_title}>Place your order</h2>
              <p className={s.article_text_sec}>
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" "The Extremes of Good and Evil" by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance.
              </p>
            </div>
            <div className={s.article_right_side}>
              <h2 className={s.right_title}>Top Articles</h2>
              <ul className={s.article_right_list}>
                <li className={s.articles_item}>
                  <img
                    src={require('../images/blog1.jpg')}
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
                <li className={s.articles_item}>
                  <img
                    src={require('../images/blog2.jpg')}
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
                <li className={s.articles_item}>
                  <img
                    src={require('../images/blog3.jpg')}
                    alt=""
                    className={s.articles_img}
                  />
                  <h2 className={s.articles_item_title}>
                    Top 5 Business Ideas
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
              </ul>
            </div>
          </div>
          <button type="button" className={s.article_btn}>
            <span>Next article</span>
            <svg className={s.article_svg} width={30.4} height={30.4}>
              <use href={svg + '#icon-arrow-right'}></use>
            </svg>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
