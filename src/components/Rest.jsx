import svg from '../images/svg.svg';
import s from '../css/main/main.module.css';

export const Restaurant = () => {
  return (
    <section className={[s['restaurants']]}>
      <div className={[s['container']]}>
        <h1 className={[s['restaurants-title']]}>
          Our Top <span>Restaurants</span>
        </h1>
        <ul className={[s['restaurants-list']]}>
          <li className={[s['restaurants-item']]}>
            <img
              src={require('../images/chicken-rest.jpg')}
              alt=""
              className={[s['restaurants-img']]}
            />
            <span className={[s['restaurants-type']]}>Healthy</span>
            <h2 className={[s['restaurants-item-title']]}>The Chicken King</h2>
            <div className={[s['restaurants-bottom-wrap']]}>
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

            <svg
              className={[s['restaurants-save-svg']]}
              width={40.1}
              height={40.1}
            >
              <use href={svg + '#icon-bookmark'}></use>
            </svg>
          </li>
          <li className={[s['restaurants-item']]}>
            <img
              src={require('../images/burger-rest.jpg')}
              alt=""
              className={[s['restaurants-img']]}
            />
            <span className={[s['restaurants-type']]}>Trending</span>
            <h2 className={[s['restaurants-item-title']]}>The Burger King</h2>
            <div className={[s['restaurants-bottom-wrap']]}>
              <span className={[s['restaurants-time']]}>24min •</span>
              <svg
                className={[s['restaurants-star-svg']]}
                width={25.5}
                height={25.8}
              >
                <use href={svg + '#icon-star'}></use>
              </svg>
              <span className={[s['restaurants-number']]}>4.9</span>
            </div>
            <svg
              className={[s['restaurants-save-svg']]}
              width={40.1}
              height={40.1}
            >
              <use href={svg + '#icon-bookmark'}></use>
            </svg>
          </li>
          <li className={[s['restaurants-item']]}>
            <img
              src={require('../images/chicken-rest.jpg')}
              alt=""
              className={[s['restaurants-img']]}
            />
            <span className={[s['restaurants-type']]}>Healthy</span>
            <h2 className={[s['restaurants-item-title']]}>The Chicken King</h2>
            <div className={[s['restaurants-bottom-wrap']]}>
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

            <svg
              className={[s['restaurants-save-svg']]}
              width={40.1}
              height={40.1}
            >
              <use href={svg + '#icon-bookmark'}></use>
            </svg>
          </li>
        </ul>
        <a href="/" className={[s['restaurants-link']]}>
          View All
        </a>
      </div>
    </section>
  );
};
