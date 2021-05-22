import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./DonatePage.css";

const stripePromise = loadStripe(
  "pk_test_51Itc7UFC7ihmJU9W7mBC368EM21sMXtLKQRNjFLa61X7vmQp00mgMz2lUZSZSxMENlNtHv97VYyR9cA2PCwq3iCN00He245DLG"
);

function DonatePage(props) {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1ItvjeFC7ihmJU9WnsJ6lfD1",
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
      <button className="donate-button" onClick={handleClick}>
        Donate $1
      </button>
      <button className="donate-button" onClick={console.log("donate")}>
        Donate $5
      </button>
      <button className="donate-button" onClick={console.log("donate")}>
        Donate $10
      </button>
      <button className="donate-button" onClick={console.log("donate")}>
        Donate $25
      </button>
    </div>
  );
}

export default DonatePage;
