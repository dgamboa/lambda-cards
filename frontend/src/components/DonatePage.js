import React from 'react';
import './DonatePage.css';

function DonatePage(props) {
  return (
    <div className="home-container">
      <h2 className="diamond-hands">💎 🙌 </h2>
      <h1>One-Time Donation</h1>
      <p className="tagline">
        Donations like yours help maintain the site so future <a href="https://lambdaschool.com/">Lambda School</a> students can use it to prepare for interviews
      </p>
      <button className="donate-button" onClick={console.log("donate")}>Donate $1</button>
      <button className="donate-button" onClick={console.log("donate")}>Donate $5</button>
      <button className="donate-button" onClick={console.log("donate")}>Donate $10</button>
      <button className="donate-button" onClick={console.log("donate")}>Donate $25</button>
    </div>
  )
}

export default DonatePage;
