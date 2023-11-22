import { useState } from "react";
import CardForm from "./components/CardForm";
import ThankYou from "./components/ThankYou";
import CardDetails from "./components/CardDetails";

const App = () => {
  const initialState = {
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const [cardType, setCardType] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if the input contains Letters only
  function validateName(text) {
    if (/^[a-zA-Z\s]*$/.test(text)) return true;
    return false;
  }

  // Check if the input contains Numbers only
  function validateNumber(input) {
    let number = cleanNumber(input);
    if (/^[0-9]+$/.test(number)) return true;
    return false;
  }

  // removes spaces
  function cleanNumber(number) {
    return number.replace(/\s/g, "");
  }

  //* Validate Card Number using Luhn's Algorithm
  function validateCardNumber(cardNumber) {
    var cleanedCardNumber = cleanNumber(cardNumber);
    var cardNumberArray = cleanedCardNumber.split("").reverse().map(Number);
    var sum = 0;
    for (var i = 0; i < cardNumberArray.length; i++) {
      if (i % 2 !== 0) {
        cardNumberArray[i] *= 2;
        if (cardNumberArray[i] > 9) {
          cardNumberArray[i] -= 9;
        }
      }
      sum += cardNumberArray[i];
    }
    return sum % 10 === 0;
  }

  //* Identify Card Type
  const checkCardType = (e) => {
    var cardNumber = e.target.value;
    cardNumber = cleanNumber(cardNumber);

    var masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
    var visaCardRegex = /^(?:4[0-9]{12})(?:[0-9]{3})$/;
    var americanExpCardRegex = /^(?:3[47][0-9]{13})$/;

    if (masterCardRegex.test(cardNumber)) setCardType("master");
    else if (visaCardRegex.test(cardNumber)) setCardType("visa");
    else if (americanExpCardRegex.test(cardNumber)) setCardType("amex");
    else setCardType("");
  };

  // Handle Error Messages
  const handleErrors = () => {
    const newError = {};

    //* Check for Blank Inputs
    let cantBeBlank = "can't be blank";
    if (!formData.cardHolder)
      newError.cardHolder = `Cardholder Name ${cantBeBlank}`;
    if (!formData.cardNumber)
      newError.cardNumber = `Card Number ${cantBeBlank}`;
    if (!formData.expMonth) newError.expMonth = cantBeBlank;
    if (!formData.expYear) newError.expYear = cantBeBlank;
    if (!formData.cvc) newError.cvc = cantBeBlank;

    if (Object.keys(newError).length) {
      setError(newError);
      return true;
    }

    //* Check for Invalid Formats
    let wrongFormat = "Wrong format, numbers only";
    const validName = validateName(formData.cardHolder);
    if (!validName) newError.cardHolder = "Wrong format, letters only";

    const validNumber = validateNumber(formData.cardNumber);
    if (!validNumber) newError.cardNumber = wrongFormat;

    const validMonth = validateNumber(formData.expMonth);
    if (!validMonth) newError.expMonth = wrongFormat;

    const validYear = validateNumber(formData.expYear);
    if (!validYear) newError.expYear = wrongFormat;

    const validCVC = validateNumber(formData.cvc);
    if (!validCVC) newError.cvc = wrongFormat;

    if (Object.keys(newError).length) {
      setError(newError);
      return true;
    }

    //* Check for Invalid Expiry Date
    const expMonth = Number(formData.expMonth);
    const expYear = Number(formData.expYear);

    // get last two digits of the current year
    const currentYear = Number(new Date().getFullYear().toString().slice(2, 4));
    const yearDiff = expYear - currentYear;

    if (expMonth < 1 || expMonth > 12) newError.expMonth = "Invalid month";
    if (yearDiff > 5) newError.expYear = "Too Long";

    //* Check for Invalid Card Number
    if (!validateCardNumber(formData.cardNumber))
      newError.cardNumber = "Invalid card number";

    if (Object.keys(newError).length) {
      setError(newError);
      return true;
    }
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hasErrors = handleErrors();
    if (!hasErrors) setSuccess(true);
  };

  const handleDismiss = () => {
    setSuccess(false);
    setError({});
    setFormData(initialState);
  };

  return (
    <main className="main">
      {/* CARD */}
      <CardDetails cardType={cardType} formData={formData} />

      {/* FORM */}
      {!success ? (
        <CardForm
          onSubmit={onSubmit}
          handleInput={handleInput}
          formData={formData}
          error={error}
          checkCardType={checkCardType}
        />
      ) : (
        <ThankYou handleDismiss={handleDismiss} />
      )}
    </main>
  );
};

export default App;
