import { useState } from "react";
import { cardLogo, completeIcon } from "./assets/images";

const App = () => {
  const initialState = {
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true)
  };

  const handleDismiss = () => {
    setSuccess(false);
    setFormData(initialState);
  };

  return (
    <main className="w-screen max-h-screen bg-hero-mobile lg:bg-hero-desktop bg-no-repeat font-SpaceGrotesk flex flex-col lg:flex-row gap-6 overflow-hidden main-bg">
      {/* CARD */}
      <aside className="w-full lg:w-1/2 h-60 lg:h-screen relative flex flex-col justify-end items-center lg:justify-center text-LightGrayishViolet">
        <div className="bg-card-front bg-no-repeat bg-auto scale-[.64] lg:scale-100 w-[447px] h-[245px] p-7 flex flex-col justify-between -mb-[20.85rem] -ml-10 lg:mb-0 lg:ml-8 lg:shadow-2xl z-10">
          <img src={cardLogo} alt="Card Logo" className="w-20" />
          <div>
            <p className="text-[1.85rem] tracking-widest">
              {formData.cardNumber || "0000 0000 0000 0000"}
            </p>
            <div className="flex justify-between mt-4">
              <p className="uppercase tracking-widest">
                {formData.cardHolder || "Jane Appleseed"}
              </p>
              <p className="tracking-widest">
                {formData.expMonth || "00"}/{formData.expYear || "00"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card-back bg-no-repeat bg-auto scale-[.64] lg:scale-100 w-[447px] h-[245px] -mr-10 lg:-mr-56 lg:mt-10 lg:shadow-2xl z-0 flex justify-end items-center">
          <p className="mr-[3.56rem] mb-[.2rem] text-White tracking-widest">
            {formData.cvc || "000"}
          </p>
        </div>
      </aside>

      {/* FORM */}
      {!success ? (
        <form
          onSubmit={onSubmit}
          className="mt-12 self-center max-w-xs xl:max-w-sm lg:ml-24 xl:ml-16"
        >
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
              className={`input w-full ${error.cardHolder && "border-Red"}`}
            />
            {error.cardHolder && <p className="error">{error.cardHolder}</p>}
          </div>
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="e.g 1234 5678 9123 0000"
              value={formData.cardNumber}
              onChange={handleInput}
              minLength={19}
              maxLength={19}
              className={`input w-full ${
                error.cardNumber && "border-Red"
              }`}
            />
            {error.cardNumber && <p className="error">{error.cardNumber}</p>}
          </div>
          <div className="flex">
            <div className="flex flex-wrap lg:max-w-[12rem]">
              <label htmlFor="expMonth">Exp. Date (MM/YY)</label>
              <input
                type="text"
                name="expMonth"
                placeholder="MM"
                value={formData.expMonth}
                onChange={handleInput}
                minLength={1}
                maxLength={2}
                className={`input_exp_month ${
                  error.expMonth && "border-Red"
                }`}
              />
              <input
                type="number"
                name="expYear"
                placeholder="YY"
                value={formData.expYear}
                onChange={handleInput}
                max={36}
                minLength={1}
                maxLength={2}
                className={`input max-w-[5rem] ${
                  error.expYear && "border-Red"
                }`}
              />
              {error.exp && <p className="error">{error.exp}</p>}
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
                className={`input w-full ${
                  error.cvc && "border-Red"
                }`}
              />
              {error.cvc && <p className="error">{error.cvc}</p>}
            </div>
          </div>
          <button type="submit" className="button">
            Confirm
          </button>
        </form>
      ) : (
        <div className="self-center w-[20rem] lg:w-[24rem] flex flex-col justify-center items-center lg:ml-24 xl:ml-16 mt-12 lg:mt-0">
          <img src={completeIcon} alt="Complete Icon" className="mb-8" />
          <h1 className="text-2xl tracking-widest uppercase">Thank You!</h1>
          <p className="text-DarkGrayishViolet my-4">
            We&quot;ve added your card details
          </p>
          <button className="button" onClick={() => handleDismiss()}>
            Continue
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
