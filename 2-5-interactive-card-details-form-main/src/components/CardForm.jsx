/* eslint-disable react/prop-types */
const CardForm = ({
  onSubmit,
  formData,
  handleInput,
  checkCardType,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input
          type="text"
          name="cardHolder"
          placeholder="e.g. Jane Appleseed"
          value={formData.cardHolder}
          onChange={handleInput}
          minLength={3}
          maxLength={26}
          className={`form__input input--full-width ${
            error.cardHolder && "input--error-border"
          }`}
        />
        {error.cardHolder && <p className="input__error">{error.cardHolder}</p>}
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="e.g 1234 5678 9123 0000"
          value={formData.cardNumber
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
          onChange={handleInput}
          onKeyUp={checkCardType}
          minLength={16}
          maxLength={19}
          className={`form__input input--full-width ${
            error.cardNumber && "input--error-border"
          }`}
        />
        {error.cardNumber && <p className="input__error">{error.cardNumber}</p>}
      </div>
      <div className="flex">
        <div className="form__expiry">
          <label htmlFor="expMonth">Exp. Date (MM/YY)</label>
          <input
            type="text"
            name="expMonth"
            placeholder="MM"
            value={formData.expMonth}
            onChange={handleInput}
            minLength={1}
            maxLength={2}
            className={`expiry__month ${
              error.expMonth && "input--error-border"
            }`}
          />
          <input
            type="text"
            name="expYear"
            placeholder="YY"
            value={formData.expYear}
            onChange={handleInput}
            minLength={1}
            maxLength={2}
            className={`expiry__year ${error.expYear && "input--error-border"}`}
          />
          {(error.expMonth || error.expYear) && (
            <p className="input__error">{error.expMonth || error.expYear}</p>
          )}
        </div>
        <div className="-ml-2 lg:-ml-3">
          <label htmlFor="cvc">cvc</label>
          <input
            type="text"
            name="cvc"
            placeholder="e.g 123"
            value={formData.cvc}
            onChange={handleInput}
            maxLength={3}
            className={`form__input input--full-width ${
              error.cvc && "input--error-border"
            }`}
          />
          {error.cvc && <p className="input__error">{error.cvc}</p>}
        </div>
      </div>
      <button type="submit" className="button">
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
