/* eslint-disable react/prop-types */
import {
  cardLogo,
  amexCardIcon,
  masterCardIcon,
  visaCardIcon,
} from "../assets/images";

const CardDetails = ({ cardType, formData }) => {
  return (
    <aside className="aside">
      <div className="aside__card-front">
        <div className="card-front__type">
          <img src={cardLogo} alt="Card Logo" className="card-front__logo" />
          {cardType && (
            <img
              src={
                cardType === "master"
                  ? masterCardIcon
                  : cardType === "amex"
                  ? amexCardIcon
                  : cardType === "visa" && visaCardIcon
              }
              alt="card"
              className="card-front__type-icon"
            />
          )}
        </div>
        <section>
          <p className="card-front__card-number">
            {formData.cardNumber || "0000 0000 0000 0000"}
          </p>
          <div className="card-front__bottom-data">
            <p className="bottom-data__card-holder-name">
              {formData.cardHolder || "Jane Appleseed"}
            </p>
            <p className="bottom-data__expiry-date">
              {formData.expMonth || "00"}/{formData.expYear || "00"}
            </p>
          </div>
        </section>
      </div>
      <div className="aside__card-back">
        <p className="card-back__cvc">{formData.cvc || "000"}</p>
      </div>
    </aside>
  );
};

export default CardDetails;
