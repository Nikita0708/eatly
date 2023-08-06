import svg from '../images/svg.svg';
import s from '../css/main/main.module.css';

export const Food = () => {
  return (
    <section className={[s['dishes']]}>
      <div className={[s['container']]}>
        <h1 className={[s['dishes-title']]}>
          Our Top <span>Dishes</span>
        </h1>
        <ul className={[s['dishes-list']]}>
          <li className={[s['dishes-item']]}>
            <svg className={[s['dishes-heart-svg']]} width={22} height={18.2}>
              <use href={svg + '#icon-heart'}></use>
            </svg>
            <img
              src={require('../images/dish3.png')}
              alt=""
              className={[s['dishes-img']]}
            />
            <span className={[s['dishes-type']]}>Healthy</span>
            <h2 className={[s['dishes-item-title']]}>Chicken Hell</h2>
            <div className={[s['dishes-mid-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.8</span>
            </div>
            <div className={[s['dishes-bottom-wrap']]}>
              <span className={[s['dishes-price']]}>
                $12<span className={[s['dishes-small-price']]}>.99</span>
              </span>
              <button type="button" className={[s['dishes-btn']]}>
                <span>+</span>
              </button>
            </div>
          </li>
          <li className={[s['dishes-item']]}>
            <svg className={[s['dishes-heart-svg']]} width={22} height={18.2}>
              <use href={svg + '#icon-heart'}></use>
            </svg>
            <img
              src={require('../images/dish2.png')}
              alt=""
              className={[s['dishes-img']]}
            />
            <span className={[s['dishes-type']]}>Healthy</span>
            <h2 className={[s['dishes-item-title']]}>Chicken Hell</h2>
            <div className={[s['dishes-mid-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.8</span>
            </div>
            <div className={[s['dishes-bottom-wrap']]}>
              <span className={[s['dishes-price']]}>
                $12<span className={[s['dishes-small-price']]}>.99</span>
              </span>
              <button type="button" className={[s['dishes-btn']]}>
                <span>+</span>
              </button>
            </div>
          </li>
          <li className={[s['dishes-item']]}>
            <svg className={[s['dishes-heart-svg']]} width={22} height={18.2}>
              <use href={svg + '#icon-heart'}></use>
            </svg>
            <img
              src={require('../images/dish3.png')}
              alt=""
              className={[s['dishes-img']]}
            />
            <span className={[s['dishes-type']]}>Healthy</span>
            <h2 className={[s['dishes-item-title']]}>Chicken Hell</h2>
            <div className={[s['dishes-mid-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.8</span>
            </div>
            <div className={[s['dishes-bottom-wrap']]}>
              <span className={[s['dishes-price']]}>
                $12<span className={[s['dishes-small-price']]}>.99</span>
              </span>
              <button type="button" className={[s['dishes-btn']]}>
                <span>+</span>
              </button>
            </div>
          </li>
          <li className={[s['dishes-item']]}>
            <svg className={[s['dishes-heart-svg']]} width={22} height={18.2}>
              <use href={svg + '#icon-heart'}></use>
            </svg>
            <img
              src={require('../images/dish2.png')}
              alt=""
              className={[s['dishes-img']]}
            />
            <span className={[s['dishes-type']]}>Healthy</span>
            <h2 className={[s['dishes-item-title']]}>Chicken Hell</h2>
            <div className={[s['dishes-mid-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.8</span>
            </div>
            <div className={[s['dishes-bottom-wrap']]}>
              <span className={[s['dishes-price']]}>
                $12<span className={[s['dishes-small-price']]}>.99</span>
              </span>
              <button type="button" className={[s['dishes-btn']]}>
                <span>+</span>
              </button>
            </div>
          </li>
          <li className={[s['dishes-item']]}>
            <svg className={[s['dishes-heart-svg']]} width={22} height={18.2}>
              <use href={svg + '#icon-heart'}></use>
            </svg>
            <img
              src={require('../images/dish3.png')}
              alt=""
              className={[s['dishes-img']]}
            />
            <span className={[s['dishes-type']]}>Healthy</span>
            <h2 className={[s['dishes-item-title']]}>Chicken Hell</h2>
            <div className={[s['dishes-mid-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.8</span>
            </div>
            <div className={[s['dishes-bottom-wrap']]}>
              <span className={[s['dishes-price']]}>
                $12<span className={[s['dishes-small-price']]}>.99</span>
              </span>
              <button type="button" className={[s['dishes-btn']]}>
                <span>+</span>
              </button>
            </div>
          </li>
        </ul>
        <a href="/" className={[s['restaurants-link']]}>
          View All
        </a>
      </div>
    </section>
  );
};
