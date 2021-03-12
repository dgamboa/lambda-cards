import React from 'react';
import { connect } from "react-redux";
import { nextQuestion } from "../actions";

function FlashCard(props) {
  const nextQuestion = e => {
    e.preventDefault();
    props.nextQuestion();
  };

  return (
    <div>
      Hello from FlashCard
      <h1>{props.displayQuestion.question}</h1>
      <button onClick={nextQuestion}>Test action</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    displayQuestion: state.displayQuestion
  };
};

export default connect(mapStateToProps, { nextQuestion })(FlashCard);