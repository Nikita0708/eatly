import s from '../css/main/main.module.css';
import svg from '../images/svg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/index.css';

export const Customer = () => {
  if (window.innerWidth <= 826) {
    return (
      <section className={[s['customer-slider']]}>
        <div className={[s['container']]}>
          <h1 className={[s['customer-title']]}>
            <span>Customer</span> Say
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  } else if (window.innerWidth >= 826) {
    return (
      <section className={[s['customer-slider']]}>
        <div className={[s['container']]}>
          <h1 className={[s['customer-title']]}>
            <span>Customer</span> Say
          </h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={[s['review-wrap']]}>
                <div className={[s['review-top-wrap']]}>
                  <img
                    src={require('../images/customer.jpg')}
                    alt=""
                    className={[s['review-img']]}
                  />
                  <div className={[s['review-mid-wrap']]}>
                    <h2 className={[s['customer-name']]}>Alexander R.</h2>
                    <span className={[s['customer-time']]}>
                      01 Year With Us{' '}
                    </span>
                  </div>
                  <svg className={[s['review-svg']]} width={58.7} height={44.3}>
                    <use href={svg + '#icon-customer'}></use>
                  </svg>
                </div>
                <p className={[s['review-text']]}>
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
                <svg
                  className={[s['review-stars-svg']]}
                  width={138}
                  height={23}
                >
                  <use href={svg + '#icon-stars'}></use>
                </svg>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  }
};
