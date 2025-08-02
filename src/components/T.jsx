import React, { useState } from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
  const [promoCode, setPromoCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  // Static values as shown in design
  const subtotal = 2347;
  const estimatedTax = 50;
  const estimatedShipping = 29;
  const total = subtotal + estimatedTax + estimatedShipping;

  const handleApply = () => {
    // Placeholder for apply logic, e.g., validation or updating prices based on promo/card
    alert("Applied!");
  };

  return (
    <div className="order-summary-container" role="region" aria-label="Order Summary">
      <h2 className="title">Order Summary</h2>

      <form
        className="promo-card-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleApply();
        }}
        noValidate
      >
        <label htmlFor="promoCode" className="label">
          Discount code / Promo code
        </label>
        <input
          type="text"
          id="promoCode"
          name="promoCode"
          className="input-text"
          placeholder="Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          aria-describedby="promoCodeHelp"
          spellCheck="false"
          autoComplete="off"
        />

        <label htmlFor="bonusCard" className="label bonus-label">
          Your bonus card number
        </label>
        <div className="bonus-input-wrapper">
          <input
            type="text"
            id="bonusCard"
            name="bonusCard"
            className="input-text bonus-input"
            placeholder="Enter Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            aria-describedby="bonusCardHelp"
            spellCheck="false"
            autoComplete="off"
          />
          <button
            type="submit"
            className="btn-apply"
            aria-label="Apply bonus card number"
          >
            Apply
          </button>
        </div>
      </form>

      <div className="summary-details" aria-live="polite">
        <div className="summary-row subtotal">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="summary-row">
          <span>Estimated Tax</span>
          <span>${estimatedTax}</span>
        </div>
        <div className="summary-row">
          <span>Estimated shipping &amp; Handling</span>
          <span>${estimatedShipping}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button className="btn-checkout" aria-label="Proceed to checkout">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;

