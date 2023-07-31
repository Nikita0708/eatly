import s from '../css/main/main.module.css';
import svg from '../images/svg.svg';

export const Control = () => {
  return (
    <section className={[s['control']]}>
      <div className={[s['container']]}>
        <div className={[s['control-left-wrap']]}>
          <h1 className={[s['control-title']]}>
            Control <span>Purchases</span> Via Dashboard
          </h1>
          <ul className={[s['control-left-list']]}>
            <li className={[s['control-left-item']]}>
              <img
                src={require('../images/dish3.png')}
                alt=""
                className={[s['control-img']]}
              />
              <div className={[s['control-item-mid-wrap']]}>
                <h2 className={[s['control-item-title']]}>Chicken Hell</h2>
                <span className={[s['control-item-info']]}>On The Way</span>
              </div>
              <span className={[s['control-time-span']]}>3:09 PM</span>
            </li>
            <li className={[s['control-left-item']]}>
              <img
                src={require('../images/dish2.png')}
                alt=""
                className={[s['control-img']]}
              />
              <div className={[s['control-item-mid-wrap']]}>
                <h2 className={[s['control-item-title']]}>Swe Dish</h2>
                <span className={[s['control-item-info']]}>Delivered</span>
              </div>
              <span className={[s['control-time-span']]}>Yesterday</span>
            </li>
            <li className={[s['control-left-item']]}>
              <img
                src={require('../images/dish3.png')}
                alt=""
                className={[s['control-img']]}
              />
              <div className={[s['control-item-mid-wrap']]}>
                <h2 className={[s['control-item-title']]}>Swe Dish</h2>
                <span className={[s['control-item-info']]}>Delivered</span>
              </div>
              <span className={[s['control-time-span']]}>Yesterday</span>
            </li>
          </ul>
        </div>
        <div className={[s['control-right-wrap']]}>
          <div className={[s['control-top-wrap']]}>
            <h2 className={[s['control-right-title']]}>Purchases</h2>
            <form className={[s['control-form']]}>
              <select
                name="control-select"
                id="control-select"
                className={[s['control-select']]}
              >
                <option>This month</option>
                <option>Prev month</option>
                <option>Last year</option>
              </select>
            </form>
          </div>
          <ul className={[s['control-right-list']]}>
            <li className={[s['control-right-item']]}>
              <div className={[s['control-item-thumb']]}>
                <svg className={[s['control-svg']]} width={50} height={50}>
                  <use href={svg + '#icon-expense'}></use>
                </svg>
                <div className={[s['control-right-mid-wrap']]}>
                  <h3 className={[s['control-right-item-title']]}>Expense</h3>
                  <span className={[s['control-item-right-text']]}>
                    Increased By 10%
                  </span>
                </div>
                <span className={[s['control-price']]}>$409.00</span>
              </div>
              <svg className={[s['control-bar-svg']]} width={408} height={9.42}>
                <use href={svg + '#icon-divider'}></use>
              </svg>
            </li>
            <li className={[s['control-right-item']]}>
              <div className={[s['control-item-thumb']]}>
                <svg className={[s['control-svg']]} width={50} height={50}>
                  <use href={svg + '#icon-money'}></use>
                </svg>
                <div className={[s['control-right-mid-wrap']]}>
                  <h3 className={[s['control-right-item-title']]}>
                    Vocher Usage
                  </h3>
                  <span className={[s['control-item-right-text']]}>
                    Increased By 5%
                  </span>
                </div>
                <span className={[s['control-price']]}>$45.78</span>
              </div>
              <svg className={[s['control-bar-svg']]} width={408} height={9.42}>
                <use href={svg + '#icon-divider-1'}></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
