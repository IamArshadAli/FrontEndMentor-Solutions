/* eslint-disable react/prop-types */
import { completeIcon } from "../assets/images";

const ThankYou = ({ handleDismiss }) => {
  return (
    <section className="thank-you">
      <img src={completeIcon} alt="Complete Icon" className="thank-you__icon" />
      <h1 className="thank-you__title">Thank You!</h1>
      <p className="thank-you__description">
        We&quot;ve added your card details
      </p>
      <button className="button" onClick={() => handleDismiss()}>
        Continue
      </button>
    </section>
  );
};

export default ThankYou;
