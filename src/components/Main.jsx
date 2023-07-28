import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Restaurant } from "./Rest";
import { Food } from "./Food";

import React from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import svg from '../images/svg.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../js/tilt-anim.js';
import '../css/index.css';


import s from '../css/main/main.module.css';
import '../css/main/slider.css'


export const Main = () => {
    return (
        <React.Fragment>
            <section className={[s["hero"], s["preserve"] ].join(" ")}>
            <div className={[s["container"], s["preserve"] ].join(" ")}>
                <div className={[s["hero-left-wrap"], s["preserve"] ].join(" ")}>
                    <p className={[s["hero-top-text"], s["preserve"] ].join(" ")} >over 1000 users</p>
                    <h1 className={[s["hero-title"], s["level-1"], s["preserve"] ].join(" ")}>Enjoy Foods All Over The <span>World</span></h1>
                    <p className={[s["hero-bottom-text"], s["preserve"] ].join(" ")}>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus</span>.</p>
                    <div className={[s["hero-btn-wrap"], s["level-1"], s["preserve"] ].join(" ")}>
                        <button type="button" className={[s["hero-get-started"], s["preserve"] ].join(" ")}>Get Started</button>
                        <button type="button" className={[s["hero-go-pro"], s["preserve"] ].join(" ")}>Go Pro</button>
                    </div>
                    <div className={[s["hero-bottom-wrap"], s["preserve"] ].join(" ")}>
                        <svg className={[s["hero-trustpilot-svg"], s["level-1"], s["preserve"] ].join(" ")}  width={123} height={30.2}>
                            <use href={svg + '#icon-trustpilot'}></use>
                        </svg>
                        <svg className={[s["hero-stars-svg"], s["preserve"] ].join(" ")} width={95.8} height={15.3}>
                            <use href={svg + '#icon-stars'}></use>
                        </svg>
                        <span className={[s["hero-btn-number"], s["level-1"], s["preserve"] ].join(" ")}>4900+</span>
                    </div>
                </div>
                <div className={[s["hero-right-wrap"], s["preserve"] ].join(" ")}>
                    <svg className={[s["hero-top-svg"], s["preserve"] ].join(" ")} width={41.5} height={24}>
                        <use href={svg + '#icon-hero-top'}></use>
                        </svg>
                        <img src={require("../images/1st.png")} alt=""  className={[s["hero-top-img"],s["level-1"], s["preserve"] ].join(" ")}/>
                        <div className={[s["hero-main-img-wrap"], s["level--1"], s["preserve"] ].join(" ")}></div>
                        <img src={require("../images/hero-img.png")} alt="" className={[s["hero-img"], s["preserve"] ].join(" ")} />
                        <img src={require("../images/Graph.png")} alt=""  className={[s["hero-bottom-img"], s["level-1"], s["preserve"] ].join(" ")}/>
                    <svg className={[s["hero-bottom-svg"], s["preserve"] ].join(" ")} width={38.1} height={33}>
                        <use href={svg + '#icon-hero-bottom'}></use>
                    </svg>
                </div>
            </div>
            </section>
            <section className={s.info}>
                <div className={s.container}>
                    <h1 className="visually-hidden">Information</h1>
                    <ul className={[s["info-list"]]}>
                        <li className={[s["info-item"]]}>
                            <span className={[s["info-item-span"]]}>10K+</span>
                            <p className={[s["info-item-text"]]}>Satisfied Costumers All Great Over The World </p>
                        </li>
                        <li className={[s["info-item"]]}>
                            <span className={[s["info-item-span"]]}>4M</span>
                            <p className={[s["info-item-text"]]}>Healthy Dishes Sold Including Milk Shakes Smooth</p>
                        </li>
                        <li className={[s["info-item"]]}>
                            <span className={[s["info-item-span"]]}>99.99%</span>
                            <p className={[s["info-item-text"]]}>Reliable Customer Support We Provide Great Experiences</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={s.mobile}>
                <div className={s.container}>
                    <div className={[s["mobile-left-wrap"]]}>
                        <svg className={[s["mobile-left-svg"]]} width={52.5} height={61.7}>
                            <use href={svg + '#icon-Illustration-01-1'}></use>
                        </svg>
                        <img src={require("../images/mobile.jpg")} alt="mobile application" />
                    </div>
                    <div className={[s["mobile-right-wrap"]]}>
                        <h1 className={[s["mobile-title"]]}>Premium <span>Quality</span> For Your Health</h1>
                        <ul className={[s["mobile-list"]]}>
                            <li className={[s["mobile-item"]]}>
                                <p className={[s["mobile-text"]]}>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                            </li>
                            <li className={[s["mobile-item"]]}>
                                <p className={[s["mobile-text"]]}>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                            </li>
                        </ul>
                        <button type="button" className={[s["mobile-download"]]}>
                            <p>Download</p>
                            <svg className={[s["download-svg"]]} width={27.1} height={27.1}>
                                <use href={svg + '#icon-arrow-right'}></use>
                            </svg>
                        </button>
                        <svg className={[s["mobile-right-svg"]]} width={154} height={87}>
                            <use href={svg + '#icon-arrow'}></use>
                        </svg>
                    </div>
                </div>
            </section>
            <Restaurant />
            <Food />
            <section className={[s["control"]]}>
                <div className={[s["container"]]}>
                    <div className={[s["control-left-wrap"]]}>
                        <h1 className={[s["control-title"]]}>Control <span>Purchases</span> Via Dashboard</h1>
                        <ul className={[s["control-left-list"]]}>
                            <li className={[s["control-left-item"]]}>
                                <img src={require("../images/dish3.png")} alt="" className={[s["control-img"]]} />
                                <div className={[s["control-item-mid-wrap"]]}>
                                    <h2 className={[s["control-item-title"]]}>Chicken Hell</h2>
                                    <span className={[s["control-item-info"]]}>On The Way</span>
                                </div>
                                <span className={[s["control-time-span"]]}>3:09 PM</span>
                            </li>
                            <li className={[s["control-left-item"]]}>
                                <img src={require("../images/dish2.png")} alt="" className={[s["control-img"]]} />
                                <div className={[s["control-item-mid-wrap"]]}>
                                    <h2 className={[s["control-item-title"]]}>Swe Dish</h2>
                                    <span className={[s["control-item-info"]]}>Delivered</span>
                                </div>
                                <span className={[s["control-time-span"]]}>Yesterday</span>
                            </li>
                            <li className={[s["control-left-item"]]}>
                                <img src={require("../images/dish3.png")} alt="" className={[s["control-img"]]} />
                                <div className={[s["control-item-mid-wrap"]]}>
                                    <h2 className={[s["control-item-title"]]}>Swe Dish</h2>
                                    <span className={[s["control-item-info"]]}>Delivered</span>
                                </div>
                                <span className={[s["control-time-span"]]}>Yesterday</span>
                            </li>
                        </ul>
                    </div>
                    <div className={[s["control-right-wrap"]]}>
                        <div className={[s["control-top-wrap"]]}>
                            <h2 className={[s["control-right-title"]]}>Purchases</h2>
                            <form className={[s["control-form"]]}>
                                <select name="control-select" id="control-select" className={[s["control-select"]]}>
                                    <option>This month</option>
                                    <option>Prev month</option>
                                    <option>Last year</option>
                                </select>
                            </form>
                        </div>
                        <ul className={[s["control-right-list"]]}>
                            <li className={[s["control-right-item"]]}>
                                <div className={[s["control-item-thumb"]]}>
                                    <svg className={[s["control-svg"]]} width={50} height={50}>
                                        <use href={svg + '#icon-expense'}></use>
                                    </svg>
                                    <div className={[s["control-right-mid-wrap"]]}>
                                        <h3 className={[s["control-right-item-title"]]}>Expense</h3>
                                        <span className={[s["control-item-right-text"]]}>Increased By 10%</span>
                                    </div>
                                    <span className={[s["control-price"]]}>$409.00</span>
                                </div>
                                <svg className={[s["control-bar-svg"]]} width={408} height={9.42}>
                                    <use href={svg + '#icon-divider'}></use>
                                </svg>
                            </li>
                            <li className={[s["control-right-item"]]}>
                                <div className={[s["control-item-thumb"]]}>
                                    <svg className={[s["control-svg"]]} width={50} height={50}>
                                        <use href={svg + '#icon-money'}></use>
                                    </svg>
                                    <div className={[s["control-right-mid-wrap"]]}>
                                        <h3 className={[s["control-right-item-title"]]}>Vocher Usage</h3>
                                        <span className={[s["control-item-right-text"]]}>Increased By 5%</span>
                                    </div>
                                    <span className={[s["control-price"]]}>$45.78</span>
                                </div>
                                <svg className={[s["control-bar-svg"]]} width={408} height={9.42}>
                                    <use href={svg + '#icon-divider-1'}></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={[s["customer-slider"]]}>
                <div className={[s["container"]]}>
                    <h1 className={[s["customer-title"]]}><span>Customer</span> Say</h1>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <div className={[s["review-wrap"]]}>
                                <div className={[s["review-top-wrap"]]}>
                                    <img src={require("../images/customer.jpg")} alt="" className={[s["review-img"]]} />
                                    <div className={[s["review-mid-wrap"]]}>
                                        <h2 className={[s["customer-name"]]}>Alexander R.</h2>
                                        <span className={[s["customer-time"]]}>01 Year With Us </span>
                                    </div>
                                    <svg className={[s["review-svg"]]} width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className={[s["review-text"]]}>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className={[s["review-stars-svg"]]} width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className={[s["review-wrap"]]}>
                                <div className={[s["review-top-wrap"]]}>
                                    <img src={require("../images/customer.jpg")} alt="" className={[s["review-img"]]} />
                                    <div className={[s["review-mid-wrap"]]}>
                                        <h2 className={[s["customer-name"]]}>Alexander R.</h2>
                                        <span className={[s["customer-time"]]}>01 Year With Us </span>
                                    </div>
                                    <svg className={[s["review-svg"]]} width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className={[s["review-text"]]}>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className={[s["review-stars-svg"]]} width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                        <SwiperSlide><div className={[s["review-wrap"]]}>
                                <div className={[s["review-top-wrap"]]}>
                                    <img src={require("../images/customer.jpg")} alt="" className={[s["review-img"]]} />
                                    <div className={[s["review-mid-wrap"]]}>
                                        <h2 className={[s["customer-name"]]}>Alexander R.</h2>
                                        <span className={[s["customer-time"]]}>01 Year With Us </span>
                                    </div>
                                    <svg className={[s["review-svg"]]} width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className={[s["review-text"]]}>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className={[s["review-stars-svg"]]} width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                        <SwiperSlide><div className={[s["review-wrap"]]}>
                                <div className={[s["review-top-wrap"]]}>
                                    <img src={require("../images/customer.jpg")} alt="" className={[s["review-img"]]} />
                                    <div className={[s["review-mid-wrap"]]}>
                                        <h2 className={[s["customer-name"]]}>Alexander R.</h2>
                                        <span className={[s["customer-time"]]}>01 Year With Us </span>
                                    </div>
                                    <svg className={[s["review-svg"]]} width={58.7} height={44.3}>
                                        <use href={svg + '#icon-customer'}></use>
                                    </svg>
                                </div>
                                <p className={[s["review-text"]]}>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                <svg className={[s["review-stars-svg"]]} width={138} height={23}>
                                    <use href={svg + '#icon-stars'}></use>
                                </svg>
                            </div></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className={[s["sale"]]}>
                <div className={[s["container"]]}>
                    <h1 className={[s["sale-title"]]}>GET 50%</h1>
                    <form action="sale-email">
                        <input type="email" name="sale-user-email" id="sale-user-email" className={[s["sale-input"]]} placeholder=' Enter Your Email Address'/>
                        <button type="submit" className={[s["sale-submit"]]}>subscribe</button>
                    </form>
                    <img src={require("../images/dish2.png")} alt="" className={[s["sale-img"]]} />
                </div>
            </section>
      </React.Fragment>
      
     
  );
};
