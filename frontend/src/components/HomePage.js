import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Typewriter from 'typewriter-effect';
import { getQuestions } from '../actions';
import './HomePage.css';

function HomePage(props) {
  const history = useHistory();

  const handleStart = e => {
    e.preventDefault();
    props.getQuestions();
    history.push("/cards");
  };

  return (
    <div className="home-container">
      <h1><span className="wave">👋</span>Lambda Cards</h1>
      <h2 className="tagline">
        An easy way to prepare for the Lambda School web core interview using <span className="underline"><a href="https://en.wikipedia.org/wiki/Active_recall" target=
        "_blank" rel="noreferrer">active recall</a></span> and <span className="underline"><a href="https://en.wikipedia.org/wiki/Spaced_repetition" target=
        "_blank" rel="noreferrer">spaced repetition</a></span> to
          <Typewriter
            options={{
              strings: [' pass', ' rock', ' crush it'],
              autoStart: true,
              loop: true,
            }}
          />
      </h2>
      <button className="start-button" onClick={handleStart}>Start Studying &#8594;</button>
    </div>
  )
}

export default connect(null, { getQuestions })(HomePage);
