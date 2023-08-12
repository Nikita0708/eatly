import s from '../css/pricing/pricing.module.css';
import svg from '../images/svg.svg';
import '../css/index.css';
import { Header } from './Header';
import { Footer } from './Footer';

import { Control } from './Control';
import { Customer } from './Customer';

export const Pricing = () => {
  const handleFeatures = evt => {
    const categories =
      evt.currentTarget.parentElement.querySelectorAll('.features_list');
    const svgs =
      evt.currentTarget.parentElement.querySelectorAll('.mob_features');
    categories.forEach(categorie => {
      categorie.classList.toggle('features_list__disable');
    });
    svgs.forEach(svg => {
      svg.classList.toggle('mob_features__active');
    });
  };
  return (
    <>
      <Header />
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.title_wrap}>
            <svg className={s.hero_top_svg} width={83} height={77.9}>
              <use href={svg + '#icon-arrow-price'}></use>
            </svg>
            <h1 className={s.hero_title}>Our Pricing</h1>
          </div>
          <svg className={s.hero_top_img_svg} width={41} height={36}>
            <use href={svg + '#icon-top-price'}></use>
          </svg>
          <img
            src={require('../images/pricing.png')}
            alt=""
            className={s.hero_img}
          />
          <svg className={s.hero_bottom_img_svg} width={41} height={36}>
            <use href={svg + '#icon-bottom-price'}></use>
          </svg>
        </div>
      </section>
      <section className={s.section_table}>
        <div className={s.container}>
          <table className={s.table}>
            <tr className={s.table_top}>
              <th className={s.top_th}>
                <h2 className={s.th_title}>Pricing</h2>
                <p className={s.th_text}>Affordable Basic & Pro Plans</p>
              </th>
              <th className={s.top_th}>
                <h2 className={s.th_title}>Basic</h2>
                <p className={s.th_text}>Completely 100% Free Plan</p>
              </th>
              <th className={s.top_th}>
                <h2 className={s.th_title}>Premium</h2>
                <p className={s.th_text}>Amazing Premium Features Plan</p>
              </th>
            </tr>
            <tr className={s.table_price}>
              <td className={s.price_item}></td>
              <td className={s.price_item}>
                $0<span>/month</span>
              </td>
              <td className={s.price_item}>
                $5<span>/month</span>
              </td>
            </tr>
            <tr className={s.table_features}>
              <td>Core features</td>
              <td></td>
              <td></td>
            </tr>
            <tr className={s.table_support}>
              <td>Support</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>Fast Delivery</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>20% Off Food Deals</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>Transaction History</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>Weekend Deals</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-cross'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>Dashboard Access</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-cross'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_support}>
              <td>Premium Group Access</td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-cross'}></use>
                </svg>
              </td>
              <td>
                <svg className={s.table_svg} width={35} height={35}>
                  <use href={svg + '#icon-tick'}></use>
                </svg>
              </td>
            </tr>
            <tr className={s.table_btn_wrap}>
              <td></td>
              <td>
                <button type="button" className={s.table_btn}>
                  start free
                </button>
              </td>
              <td>
                <button type="button" className={s.table_btn}>
                  start pro
                </button>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section className={s.table_mob_section}>
        <div className={s.container}>
          <div className={s.mob_item}>
            <h2 className={s.mob_title}>Basic</h2>
            <span className={s.price_item}>
              $0<span>/month</span>
            </span>
            <div className={s.mob_mid_wrap}>
              <span className={s.mob_mid_span}>Completely 100% Free Plan</span>
            </div>
            <button type="button" className={s.mob_btn}>
              start free
            </button>
            <div className={s.mob_bottom_wrap}>
              <span className={s.mob_bottom_span} onClick={handleFeatures}>
                <h3 className={s.mob_bottom_title}>See features</h3>
                <img
                  src={require('../images/features.png')}
                  alt=""
                  className="mob_features"
                />
              </span>
              <ul className="features_list features_list__disable">
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Support 24/7</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Fast Delivery</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>
                    20% Off Food Deals
                  </span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>
                    Transaction History
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.mob_item}>
            <h2 className={s.mob_title}>Premium</h2>
            <span className={s.price_item}>
              $9<span>/month</span>
            </span>
            <div className={s.mob_mid_wrap}>
              <span className={s.mob_mid_span}>
                Amazing Premium Features Plan
              </span>
            </div>
            <button type="button" className={s.mob_btn}>
              start Pro
            </button>
            <div className={s.mob_bottom_wrap}>
              <span className={s.mob_bottom_span} onClick={handleFeatures}>
                <h3 className={s.mob_bottom_title}>See features</h3>
                <img
                  src={require('../images/features.png')}
                  alt=""
                  className="mob_features"
                />
              </span>
              <ul className="features_list features_list__disable">
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Support 24/7</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Fast Delivery</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>
                    20% Off Food Deals
                  </span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>
                    Transaction History
                  </span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Weekend Deals</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>Dashboard Access</span>
                </li>
                <li className={s.features_item}>
                  <svg className={s.features_item_svg} width={19} height={19}>
                    <use href={svg + '#icon-tick'}></use>
                  </svg>
                  <span className={s.features_item_span}>
                    Premium Group Access
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Control />
      <Customer />
      <Footer />
    </>
  );
};
