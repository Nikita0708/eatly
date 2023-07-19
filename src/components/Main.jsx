import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import svg from '../images/svg.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../sass/main/main.css';

import '../js/tilt-anim.js';

export const Main = () => {
    return (
        <section className="main">
        <section className="hero preserve">
            <div className="container hero-container preserve">
                <div className="hero-left-wrap preserve">
                    <p className="hero-top-text preserve">over 1000 users</p>
                    <h1 className="hero-title level-1 preserve">Enjoy Foods All Over The <span>World</span></h1>
                    <p className="hero-bottom-text preserve">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus</span>.</p>
                    <div className="hero-btn-wrap level-1 preserve">
                        <button type="button" className="hero-get-started preserve">Get Started</button>
                        <button type="button" className="hero-go-pro preserve">Go Pro</button>
                    </div>
                    <div className="hero-bottom-wrap preserve">
                        <svg className="hero-trustpilot-svg level-1 preserve" width={123} height={30.2}>
                            <use href={svg + '#icon-trustpilot'}></use>
                        </svg>
                        <svg className="hero-stars-svg preserve" width={95.8} height={15.3}>
                            <use href={svg + '#icon-stars'}></use>
                        </svg>
                        <span className="hero-btn-number preserve level-1">4900+</span>
                    </div>
                </div>
                <div className="hero-right-wrap preserve">
                    <svg className="hero-top-svg  preserve" width={41.5} height={24}>
                        <use href={svg + '#icon-hero-top'}></use>
                        </svg>
                        <img src={require("../images/1st.png")} alt=""  className='hero-top-img level-1 preserve'/>
                        <div className="hero-main-img-wrap level--1 preserve"></div>
                        <img src={require("../images/hero-img.png")} alt="" className="hero-img preserve " />
                        <img src={require("../images/Graph.png")} alt=""  className='hero-bottom-img level-1 preserve'/>
                    <svg className="hero-bottom-svg preserve" width={38.1} height={33}>
                        <use href={svg + '#icon-hero-bottom'}></use>
                    </svg>
                </div>
            </div>
            </section>
            <section className="info">
                <div className="container">
                    <h1 className="info-title visually-hidden">Information</h1>
                    <ul className="info-list">
                        <li className="info-item">
                            <span className="info-item-span">10K+</span>
                            <p className="info-item-text">Satisfied Costumers All Great Over The World </p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-span">4M</span>
                            <p className="info-item-text">Healthy Dishes Sold Including Milk Shakes Smooth</p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-span">99.99%</span>
                            <p className="info-item-text">Reliable Customer Support We Provide Great Experiences</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mobile">
                <div className="container">
                    <div className="mobile-left-wrap">
                        <svg className="mobile-left-svg" width={52.5} height={61.7}>
                            <use href={svg + '#icon-Illustration-01-1'}></use>
                        </svg>
                        <img src={require("../images/mobile.jpg")} alt="mobile application" />
                    </div>
                    <div className="mobile-right-wrap">
                        <h1 className="mobile-title">Premium <span>Quality</span> For Your Health</h1>
                        <ul className="mobile-list">
                            <li className="mobile-item">
                                <p className="mobile-text">Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                            </li>
                            <li className="mobile-item">
                                <p className="mobile-text">These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                            </li>
                        </ul>
                        <button type="button" className="mobile-download">
                            <p>Download</p>
                            <svg className="mobile-download-svg" width={27.1} height={27.1}>
                                <use href={svg + '#icon-arrow-right'}></use>
                            </svg>
                        </button>
                        <svg className="mobile-right-svg" width={154} height={87}>
                            <use href={svg + '#icon-arrow'}></use>
                        </svg>
                    </div>
                </div>
            </section>
            <section className="restaurants">
                <div className="container">
                    <h1 className="restaurants-title">Our Top <span>Restaurants</span></h1>
                    <ul className="restaurants-list">
                        <li className="restaurants-item">
                            <img src={require("../images/chicken-rest.jpg")} alt="" className="restaurants-img" /><span className="restaurants-type">Healthy</span>
                            <h2 className="restaurants-item-title">The Chicken King</h2>
                            <div className="restaurants-bottom-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                                <span className="restaurants-number">4.8</span>
                                
                            </div>
                            
                            <svg className="restaurants-save-svg" width={40.1} height={40.1}>
                                <use href={svg + '#icon-bookmark'}></use>
                            </svg>
                            
                        </li>
                        <li className="restaurants-item">
                            <img src={require("../images/burger-rest.jpg")} alt="" className="restaurants-img" /><span className="restaurants-type">Trending</span>
                            <h2 className="restaurants-item-title">The Burger King</h2>
                            <div className="restaurants-bottom-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                                <span className="restaurants-number">4.9</span>
                                
                            </div>
                            <svg className="restaurants-save-svg" width={40.1} height={40.1}>
                                <use href={svg + '#icon-bookmark'}></use>
                            </svg>
                            
                        </li>
                        <li className="restaurants-item">
                            <img src={require("../images/chicken-rest.jpg")} alt="" className="restaurants-img" /><span className="restaurants-type">Healthy</span>
                            <h2 className="restaurants-item-title">The Chicken King</h2>
                            <div className="restaurants-bottom-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                                <span className="restaurants-number">4.8</span>
                                
                            </div>
                            <svg className="restaurants-save-svg" width={40.1} height={40.1}>
                                <use href={svg + '#icon-bookmark'}></use>
                            </svg>
                        </li>
                    </ul>
                    <a href="#" className="restaurants-link">View All</a>
                </div>
            </section>
            <section className="dishes">
                <div className="container">
                    <h1 className="dishes-title">Our Top <span>Dishes</span></h1>
                    <ul className="dishes-list">
                        <li className="dishes-item">
                            <svg className="dishes-heart-svg" width={22} height={18.2}>
                                <use href={svg + '#icon-heart'}></use>
                            </svg>
                            <img src={require("../images/dish3.png")} alt="" className="dishes-img" /><span className="dishes-type">Healthy</span>
                            <h2 className="dishes-item-title">Chicken Hell</h2>
                            <div className="dishes-mid-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                            <span className="restaurants-number">4.8</span>
                            </div>
                            <div className="dishes-bottom-wrap">
                                <span className="dishes-price">$12<span className="dishes-small-price">.99</span></span>
                                <button type="button" className='dishes-btn'><span>+</span></button>
                            </div>
                        </li>
                        <li className="dishes-item">
                            <svg className="dishes-heart-svg" width={22} height={18.2}>
                                <use href={svg + '#icon-heart'}></use>
                            </svg>
                            <img src={require("../images/dish2.png")} alt="" className="dishes-img" /><span className="dishes-type">Trending</span>
                            <h2 className="dishes-item-title">Swe Dish</h2>
                            <div className="dishes-mid-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                            <span className="restaurants-number">4.8</span>
                            </div>
                            <div className="dishes-bottom-wrap">
                                <span className="dishes-price">$19<span className="dishes-small-price">.99</span></span>
                                <button type="button" className='dishes-btn'><span>+</span></button>

                            </div>
                        </li>
                        <li className="dishes-item">
                            <svg className="dishes-heart-svg" width={22} height={18.2}>
                                <use href={svg + '#icon-heart'}></use>
                            </svg>
                            <img src={require("../images/dish3.png")} alt="" className="dishes-img" /><span className="dishes-type">Supreme</span>
                            <h2 className="dishes-item-title">Swe Dish</h2>
                            <div className="dishes-mid-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                            <span className="restaurants-number">4.8</span>
                            </div>
                            <div className="dishes-bottom-wrap">
                                <span className="dishes-price">$19<span className="dishes-small-price">.99</span></span>
                                <button type="button" className='dishes-btn'><span>+</span></button>
                            </div>
                        </li>
                        <li className="dishes-item">
                            <svg className="dishes-heart-svg" width={22} height={18.2}>
                                <use href={svg + '#icon-heart'}></use>
                            </svg>
                            <img src={require("../images/dish2.png")} alt="" className="dishes-img" /><span className="dishes-type">Healthy</span>
                            <h2 className="dishes-item-title">Chicken Hell</h2>
                            <div className="dishes-mid-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                            <span className="restaurants-number">4.8</span>
                            </div>
                            <div className="dishes-bottom-wrap">
                                <span className="dishes-price">$19<span className="dishes-small-price">.99</span></span>
                                <button type="button" className='dishes-btn'><span>+</span></button>
                            </div>
                        </li>
                        <li className="dishes-item">
                            <svg className="dishes-heart-svg" width={22} height={18.2}>
                                <use href={svg + '#icon-heart'}></use>
                            </svg>
                            <img src={require("../images/dish2.png")} alt="" className="dishes-img" /><span className="dishes-type">Trending</span>
                            <h2 className="dishes-item-title">Swe Dish</h2>
                            <div className="dishes-mid-wrap">
                                <span className="restaurants-time">24min •</span>
                            <svg className="restaurants-star-svg" width={25.5} height={25.8}>
                                <use href={svg + '#icon-star'}></use>
                            </svg>
                            <span className="restaurants-number">4.8</span>
                            </div>
                            <div className="dishes-bottom-wrap">
                                <span className="dishes-price">$19<span className="dishes-small-price">.99</span></span>
                                <button type="button" className='dishes-btn'><span>+</span></button>
                            </div>
                        </li>
                    </ul>
                    <a href="#" className="restaurants-link">View All</a>
                </div>
            </section>
            <section className="control">
                <div className="container">
                    <div className="control-left-wrap">
                        <h1 className="control-title">Control <span>Purchases</span> Via Dashboard</h1>
                        <ul className="control-left-list">
                            <li className="control-left-item">
                                <img src={require("../images/dish3.png")} alt="" className="control-img" />
                                <div className="control-item-mid-wrap">
                                    <h2 className="control-item-title">Chicken Hell</h2>
                                    <span className="control-item-info">On The Way</span>
                                </div>
                                <span className="control-time-span">3:09 PM</span>
                            </li>
                            <li className="control-left-item">
                                <img src={require("../images/dish2.png")} alt="" className="control-img" />
                                <div className="control-item-mid-wrap">
                                    <h2 className="control-item-title">Swe Dish</h2>
                                    <span className="control-item-info">Delivered</span>
                                </div>
                                <span className="control-time-span">Yesterday</span>
                            </li>
                            <li className="control-left-item">
                                <img src={require("../images/dish3.png")} alt="" className="control-img" />
                                <div className="control-item-mid-wrap">
                                    <h2 className="control-item-title">Fish Hell Veg</h2>
                                    <span className="control-item-info control-item-info__cancelled">Cancelled</span>
                                </div>
                                <span className="control-time-span">Yesterday</span>
                            </li>
                        </ul>
                    </div>
                    <div className="control-right-wrap">
                        <div className="control-top-wrap">
                            <h2 className="control-right-title">Purchases</h2>
                            <form className='control-form'>
                                <select name="control-select" id="control-select" className='control-select'>
                                    <option>This month</option>
                                    <option>Prev month</option>
                                    <option>Last year</option>
                                </select>
                            </form>
                        </div>
                        <ul className="control-right-list">
                            <li className="control-right-item">
                                <div className="control-item-thumb">
                                    <svg className="control-svg" width={50} height={50}>
                                        <use href={svg + '#icon-expense'}></use>
                                    </svg>
                                    <div className="control-right-mid-wrap">
                                        <h3 className="control-right-item-title">Expense</h3>
                                        <span className="control-item-right-text">Increased By 10%</span>
                                    </div>
                                    <span className="control-price">$409.00</span>
                                </div>
                                <svg className="control-bar-svg" width={408} height={9.42}>
                                    <use href={svg + '#icon-divider'}></use>
                                </svg>
                            </li>
                            <li className="control-right-item">
                                <div className="control-item-thumb">
                                    <svg className="control-svg" width={50} height={50}>
                                        <use href={svg + '#icon-money'}></use>
                                    </svg>
                                    <div className="control-right-mid-wrap">
                                        <h3 className="control-right-item-title">Vocher Usage</h3>
                                        <span className="control-item-right-text">Increased By 5%</span>
                                    </div>
                                    <span className="control-price">$45.78</span>
                                </div>
                                <svg className="control-bar-svg" width={408} height={9.42}>
                                    <use href={svg + '#icon-divider-1'}></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="customer-slider">
                <div className="container">
                    <h1 className="customer-title"><span>Customer</span> Say</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <div className="review-wrap">
                                <div className="review-top-wrap">
                                    <img src={require("../images/customer.jpg")} alt="" className='review-img' />
                                    <div className="review-mid-wrap">
                                        <h2 className="customer-name">Alexander R.</h2>
                                        <span className="customer-time">01 Year With Us </span>
                                    </div>
                                    <svg className="review-svg" width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className="review-text">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className="review-stars-svg" width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="review-wrap">
                                <div className="review-top-wrap">
                                    <img src={require("../images/customer.jpg")} alt="" className='review-img' />
                                    <div className="review-mid-wrap">
                                        <h2 className="customer-name">Alexander R.</h2>
                                        <span className="customer-time">01 Year With Us </span>
                                    </div>
                                    <svg className="review-svg" width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className="review-text">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className="review-stars-svg" width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                        <SwiperSlide><div className="review-wrap">
                                <div className="review-top-wrap">
                                    <img src={require("../images/customer.jpg")} alt="" className='review-img' />
                                    <div className="review-mid-wrap">
                                        <h2 className="customer-name">Alexander R.</h2>
                                        <span className="customer-time">01 Year With Us </span>
                                    </div>
                                    <svg className="review-svg" width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className="review-text">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className="review-stars-svg" width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                        <SwiperSlide><div className="review-wrap">
                                <div className="review-top-wrap">
                                    <img src={require("../images/customer.jpg")} alt="" className='review-img' />
                                    <div className="review-mid-wrap">
                                        <h2 className="customer-name">Alexander R.</h2>
                                        <span className="customer-time">01 Year With Us </span>
                                    </div>
                                    <svg className="review-svg" width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className="review-text">“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className="review-stars-svg" width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="sale">
                <div className="container">
                    <h1 className="sale-title">GET 50%</h1>
                    <form action="sale-email">
                        <input type="email" name="sale-user-email" id="sale-user-email" className='sale-input' placeholder=' Enter Your Email Address'/>
                        <button type="submit" className='sale-submit'>subscribe</button>
                    </form>
                    <img src={require("../images/dish2.png")} alt="" className='sale-img' />
                </div>
            </section>
      </section>
      
     
  );
};
