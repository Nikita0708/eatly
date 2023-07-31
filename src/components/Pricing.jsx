import s from '../css/pricing/pricing.module.css';
import svg from '../images/svg.svg';
import '../css/index.css';

import { Control } from './Control';
import { Customer } from './Customer';

export const Pricing = () => {
  return (
    <>
      <section className={s.hero}>
        <div className={s.container}>
          <svg className={s.hero_top_svg} width={83} height={77.9}>
            <use href={svg + '#icon-arrow-price'}></use>
          </svg>
          <h1 className={s.hero_title}>Our Pricing</h1>
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
      <Control />
      <Customer />
    </>
  );
};
