import { useState } from "react";
import "./dashboard.css";

function PaymentForm({ total, onClose, onPaymentComplete }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16) {
      // Format with spaces every 4 digits
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
      setCardNumber(value);
      if (errors.cardNumber) {
        setErrors({ ...errors, cardNumber: false });
      }
    }
  };

  const handleExpDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
      setExpDate(value);
      if (errors.expDate) {
        setErrors({ ...errors, expDate: false });
      }
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
      if (errors.cvv) {
        setErrors({ ...errors, cvv: false });
      }
    }
  };

  const handleCardPinChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setCardPin(value);
      if (errors.cardPin) {
        setErrors({ ...errors, cardPin: false });
      }
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!cardNumber.replace(/\s/g, "")) newErrors.cardNumber = true;
    if (!expDate) newErrors.expDate = true;
    if (!cvv) newErrors.cvv = true;
    if (!cardPin) newErrors.cardPin = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful!");
      onPaymentComplete?.();
      onClose();
    }, 2000);
  };

  const formattedTotal = total.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <div className="payment-overlay" onClick={onClose}>
      <div
        className="payment-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="payment-header">
          <h2 className="payment-title">Payment Details</h2>
          <div className="payment-amount">{formattedTotal}</div>
        </div>
        <form onSubmit={handlePayment} className="payment-form">
          <div className={`form-group ${errors.cardNumber ? "error" : ""}`}>
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength="19"
              required
            />
          </div>

          <div className={`form-group ${errors.expDate ? "error" : ""}`}>
            <label htmlFor="expDate">Exp Date</label>
            <input
              id="expDate"
              type="text"
              placeholder="MM/YY"
              value={expDate}
              onChange={handleExpDateChange}
              maxLength="5"
              required
            />
          </div>

          <div className={`form-group ${errors.cvv ? "error" : ""}`}>
            <label htmlFor="cvv">CVV/CVV2</label>
            <input
              id="cvv"
              type="password"
              placeholder="***"
              value={cvv}
              onChange={handleCvvChange}
              maxLength="3"
              required
            />
          </div>

          <div className={`form-group ${errors.cardPin ? "error" : ""}`}>
            <label htmlFor="cardPin">Card Pin</label>
            <input
              id="cardPin"
              type="password"
              placeholder="****"
              value={cardPin}
              onChange={handleCardPinChange}
              maxLength="4"
              required
            />
          </div>

          <button type="submit" className="payment-btn" disabled={loading}>
            {loading ? "Processing..." : "Make Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
