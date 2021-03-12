import React from 'react';
import { connect } from 'react-redux';

function FlashCard(props) {
  const { displayQuestion } = props;

  const flipCard = e => {
    e.target
     .parentNode
     .parentNode
     .classList.toggle('flipped');
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
      <button className="next-question">Next Question</button>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    displayQuestion: state.displayQuestion
  };
};

export default connect(mapStateToProps, {})(FlashCard);