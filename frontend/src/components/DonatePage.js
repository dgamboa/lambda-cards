import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./DonatePage.css";

const stripePromise = loadStripe(
  "pk_test_51Itc7UFC7ihmJU9W7mBC368EM21sMXtLKQRNjFLa61X7vmQp00mgMz2lUZSZSxMENlNtHv97VYyR9cA2PCwq3iCN00He245DLG"
);

function DonatePage(props) {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: event.target.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/donate",
    });
  };

  return (
    <div className="home-container">
      <h2 className="diamond-hands">💎 🙌 </h2>
      <h1>One-Time Donation</h1>
      <p className="tagline">
        Donations like yours help maintain the site so future{" "}
        <a href="https://lambdaschool.com/">Lambda School</a> students can use
        it to prepare for interviews
      </p>

      <button
        className="donate-button"
        id="price_1ItvjeFC7ihmJU9WnsJ6lfD1"
        onClick={handleClick}
      >
        Donate $1
      </button>
      <button
        className="donate-button"
        id="price_1ItvjmFC7ihmJU9WoWWWP16q"
        onClick={handleClick}
      >
        Donate $5
      </button>
      <button
        className="donate-button"
        id="price_1ItvjxFC7ihmJU9WnMY8XdP2"
        onClick={handleClick}
      >
        Donate $10
      </button>
      <button
        className="donate-button"
        id="price_1Itvk6FC7ihmJU9WDf6OvkRS"
        onClick={handleClick}
      >
        Donate $25
      </button>
    </div>
  );
}

export default DonatePage;
