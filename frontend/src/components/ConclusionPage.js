import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { restartSession } from '../actions';

function ConclusionPage(props) {
  const history = useHistory();

  const handleRestart = e => {
    e.preventDefault();
    props.restartSession();
    // Need to re-fetch the data so it scrambles
    history.push("/cards")
  };

  return (
    <div className="home-container">
      <h1>Good work! 👏</h1>
      <p>
        You may want to take a break before doing another round
      </p>
      <button className="restart-button" onClick={handleRestart}>When you're ready, click here to start again</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    questionCounter: state.questionCounter
  };
};

export default connect(mapStateToProps, { restartSession })(ConclusionPage);