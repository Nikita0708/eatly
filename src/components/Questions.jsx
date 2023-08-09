import '../css/index.css';
import s from '../css/menu/menu.module.css';
import svg from '../images/svg.svg';
import '../css/menu/questions.css';

export const Questions = () => {
  const showAnswer = evt => {
    const answers = evt.currentTarget.querySelectorAll('.questions-answer');

    answers.forEach(answer => {
      answer.classList.toggle('questions-answer__disabled');
    });
  };
  return (
    <section className={s.questions}>
      <div className={s.container}>
        <div className={s.quest_top_wrap}>
          <svg className={[s['questions-top-svg']]} width={41} height={38.8}>
            <use href={svg + '#icon-hero-bottom'}></use>
          </svg>
          <h1 className={s.questions_title}>
            Frequently Asked <span>Questions</span>
          </h1>
        </div>
        <ul className={[s['questions-list']]}>
          <li className="question-container" onClick={showAnswer}>
            <div className={s.question_wrap}>
              <h2 className="questions-item-title">
                How long does delivery take?
              </h2>
              <svg className={s.question_svg} width={30.1} height={30.1}>
                <use href={svg + '#icon-plus'}></use>
              </svg>
            </div>
            <p className="questions-answer questions-answer__disabled">
              This is the answer to a question higher
            </p>
          </li>
          <li className="question-container" onClick={showAnswer}>
            <div className={s.question_wrap}>
              <h2 className="questions-item-title">How Does It Work ?</h2>
              <svg className={s.question_svg} width={30.1} height={30.1}>
                <use href={svg + '#icon-plus'}></use>
              </svg>
            </div>
            <p className="questions-answer questions-answer__disabled">
              This is the answer to a question higher
            </p>
          </li>
          <li className="question-container" onClick={showAnswer}>
            <div className={s.question_wrap}>
              <h2 className="questions-item-title">
                How does your food delivery service work?
              </h2>
              <svg className={s.question_svg} width={30.1} height={30.1}>
                <use href={svg + '#icon-plus'}></use>
              </svg>
            </div>
            <p className="questions-answer questions-answer__disabled">
              This is the answer to a question higher
            </p>
          </li>
          <li className="question-container" onClick={showAnswer}>
            <div className={s.question_wrap}>
              <h2 className="questions-item-title">
                What payment options do you accept?
              </h2>
              <svg className={s.question_svg} width={30.1} height={30.1}>
                <use href={svg + '#icon-plus'}></use>
              </svg>
            </div>
            <p className="questions-answer questions-answer__disabled">
              This is the answer to a question higher
            </p>
          </li>
          <li className="question-container" onClick={showAnswer}>
            <div className={s.question_wrap}>
              <h2 className="questions-item-title">
                Do you offer discounts or promotions?
              </h2>
              <svg className={s.question_svg} width={30.1} height={30.1}>
                <use href={svg + '#icon-plus'}></use>
              </svg>
            </div>
            <p className="questions-answer questions-answer__disabled">
              This is the answer to a question higher
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
