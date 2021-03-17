import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { nextQuestion, getQuestions } from "../../actions";
import QuestionCounter from "./QuestionCounter"
import FlashCard from './FlashCard';
import './FlashCardPage.css';

function FlashCardPage(props) {
  useEffect(() => {
    props.getQuestions()
  }, [])//eslint-disable-line
  
  return (
    <div className="card-container">
      <QuestionCounter />
      <FlashCard />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    displayQuestion: state.displayQuestion
  };
};

export default connect(mapStateToProps, { nextQuestion, getQuestions })(FlashCardPage);