import s from '../css/contact/contact.module.css';
import svg from '../images/svg.svg';
import '../css/index.css';
import '../css/contact/contact.css';
import { Header } from './Header';
import { Footer } from './Footer';

export const Contact = () => {
  return (
    <>
      <Header />
      <section className={s.contact}>
        <div className={s.container}>
          <div className={s.contact_left_side}>
            <div className={s.contact_title_wrap}>
              <h1 className={s.contact_left_title}>Just Contact</h1>
              <svg className={s.mob_svg} width={80} height={85}>
                <use href={svg + '#icon-arrow-mob-cont'}></use>
              </svg>
              <svg className={s.left_svg} width={336} height={128}>
                <use href={svg + '#icon-contact'}></use>
              </svg>
            </div>
            <div className={[s['mobile-left-wrap']]}>
              <svg
                className={[s['mobile-left-svg']]}
                width={52.5}
                height={61.7}
              >
                <use href={svg + '#icon-Illustration-01-1'}></use>
              </svg>
              <img
                src={require('../images/mobile.png')}
                alt="mobile application"
                className={s.left_img}
              />
            </div>
          </div>
          <form className={s.form}>
            <h1 className={s.form_title}>
              Customer <span>Support</span>
            </h1>
            <input
              type="text"
              name="user-name"
              className="form_input form_input_name"
              placeholder="FULL NAME"
            />
            <input
              type="email"
              name="user-email"
              className="form_input form_input_email"
              placeholder="ENTER YOUR EMAIL"
            />
            <textarea
              name="user-question"
              className={s.form_textarea}
              placeholder="ENTER THE PROBLEM OR QUERY"
            />
            <button type="submit" className={s.form_btn}>
              Send Now
            </button>
            <svg className={s.form_svg} width={123} height={123}>
              <use href={svg + '#icon-Arrow'}></use>
            </svg>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
