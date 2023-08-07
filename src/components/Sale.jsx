import s from '../css/main/main.module.css';

export const Sale = () => {
  return (
    <section className={[s['sale']]}>
      <div className={[s['container']]}>
        <h1 className={[s['sale-title']]}>GET 50%</h1>
        <form action="sale-email" className={s.form}>
          <input
            type="email"
            name="sale-user-email"
            id="sale-user-email"
            className={[s['sale-input']]}
            placeholder="Email Address"
          />
          <button type="submit" className={[s['sale-submit']]}>
            subscribe
          </button>
        </form>
        <img
          src={require('../images/dish2.png')}
          alt=""
          className={[s['sale-img']]}
        />
      </div>
    </section>
  );
};
