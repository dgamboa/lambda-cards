import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./DonatePage.css";

const stripePromise = loadStripe(
  "pk_live_51Itc7UFC7ihmJU9WBVfdotCmOFQcBZgZ44XS2w5dfXS2eRFbWdNEkRINP97Dlov6D8Fbm5BwDIiVof3KS9v1MciW001a9I8fk4"
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
      successUrl: "https://www.lambdacards.com/",
      cancelUrl: "https://www.lambdacards.com/donate",
      submitType: 'donate',
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
        id="price_1Iu6OTFC7ihmJU9WpUsAjBmt"
        onClick={handleClick}
      >
        Donate $1
      </button>
      <button
        className="donate-button"
        id="price_1Iu6OQFC7ihmJU9WPqcaqrLw"
        onClick={handleClick}
      >
        Donate $5
      </button>
      <button
        className="donate-button"
        id="price_1Iu6ONFC7ihmJU9W3fWbDtmR"
        onClick={handleClick}
      >
        Donate $10
      </button>
      <button
        className="donate-button"
        id="price_1Iu6OHFC7ihmJU9WoAGHz1eT"
        onClick={handleClick}
      >
        Donate $25
      </button>
    </div>
  );
}

export default DonatePage;
