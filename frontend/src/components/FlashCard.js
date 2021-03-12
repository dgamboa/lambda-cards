import React from 'react';
import { connect } from "react-redux";

function FlashCard() {
  return (
    <div>
      Hello from FlashCard
    </div>
  )
}

const mapStateToProps = state => {
  return {
    displayQuestion: state.displayQuestion
  };
};

export default connect(mapStateToProps, {})(FlashCard);