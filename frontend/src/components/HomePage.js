import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getQuestions } from '../actions';
import './HomePage.css';

function HomePage(props) {
  const history = useHistory();

  const typeEffect = (span, round = 1) => {
    console.log(span);
    // if (round < 4) {
    //   round++;
    //   typeEffect(span, round)
    // } else {
    //   round = 1;
    //   typeEffect(span, round)
    // }
  };

  useEffect(() => {
    const typed = document.querySelector('.typed');
    typeEffect(typed);
  }, [])

  const handleStart = e => {
    e.preventDefault();
    props.getQuestions();
    history.push("/cards");
  };

  return (
    <div className="home-container">
      <h1><span className="wave">👋</span> Welcome to Lambda Cards</h1>
      <h2>
        An easy way to prepare for the Lambda Web Core Interview using <a href="https://en.wikipedia.org/wiki/Active_recall" target=
        "_blank" rel="noreferrer">Active Recall</a> and <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target=
        "_blank" rel="noreferrer">Spaced Repetition</a> to <span className="typed">💎🙌🚀🌝 it</span>
        {/* pass it, rock it, 💎🙌🚀🌝 it */}
      </h2>
      <button className="start-button" onClick={handleStart}>Click here to start</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    questionsList: state.questionsList
  };
};

export default connect(mapStateToProps, { getQuestions })(HomePage);