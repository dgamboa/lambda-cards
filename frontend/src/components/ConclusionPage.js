import React from 'react';
import { useHistory } from 'react-router';

export default function ConclusionPage() {
  const history = useHistory();

  const handleRestart = e => {
    e.preventDefault();
    history.push("/cards")
  };

  return (
    <div className="home-container">
      <h1>Good work!</h1>
      <p>
        You may want to take a break before doing another round
      </p>
      <button className="restart-button" onClick={handleRestart}>When you're ready, click here to start again</button>
    </div>
  )
}
