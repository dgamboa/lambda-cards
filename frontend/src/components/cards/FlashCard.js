import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { nextQuestion } from '../../actions';

function FlashCard(props) {
  const { totalQuestions, displayQuestion, questionCounter } = props;
  const [flipped, setFlipped] = useState(false);
  const history = useHistory();

  const handleNextQuestion = e => {
    e.preventDefault();
    if (flipped) {
      e.target
      .previousElementSibling
      .firstChild
      .classList.toggle('flipped');
      setFlipped(false);
    };
    setTimeout(() => {
      props.nextQuestion();
    }, 100)
  };

  const handleFinish = e => {
    e.preventDefault();
    history.push("/conclusion");
  };

  const flipCard = e => {
    e.target
     .parentNode
     .parentNode
     .classList.toggle('flipped');
    setFlipped(true);
  };

  return (
    <section className="flashcard-container">
      <div className="ring-fence">
        <div className="card">
          <div className="card-face front">
            <h3 className="question-front">{displayQuestion.question}</h3>
            <p onClick={flipCard}>See answer</p>
          </div>
          <div className="card-face back">
            <h3 className="question-back">{displayQuestion.question}</h3>
            <p className="answer-back">{displayQuestion.answer}</p>
          </div>
        </div>
      </div>
      {
        questionCounter < totalQuestions &&
        <button className="next-question" onClick={handleNextQuestion}>Next Question</button>
      }
      {
        questionCounter === totalQuestions &&
        <button className="finish" onClick={handleFinish}>Finish</button>
      }
    </section>
  )
}

const mapStateToProps = state => {
  return {
    totalQuestions: state.questionsList.length,
    displayQuestion: state.displayQuestion,
    questionCounter: state.questionCounter
  };
};

export default connect(mapStateToProps, { nextQuestion })(FlashCard);