import React from 'react';

export default function HomePage() {

  const handleClick = e => {
    e.preventDefault();
    console.log("Start Button")
  };

  return (
    <div className="home-container">
      <h1>Welcome to Lambda Cards</h1>
      <h2>
        An Easy Way to Prepare for the Lambda Core Interview Using <a href="https://en.wikipedia.org/wiki/Active_recall" target=
        "_blank" rel="noreferrer">Active Recall</a> and <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target=
        "_blank" rel="noreferrer">Spaced Repetition</a>
      </h2>
      <button className="start-button" onClick={handleClick}>Click here to start</button>
    </div>
  )
}
