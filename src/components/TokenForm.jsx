import React, { useState } from "react";
import { validateTokenDetails } from "../blockchain/validate";

function TokenForm({ network }) {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = validateTokenDetails({
      tokenName,
      tokenSymbol,
      totalSupply
    });

    setErrors(result.errors);

    if (!result.valid) {
      return;
    }

    alert(
      `Token details are valid.\n\n` +
      `Network: ${
        network === "ethereum"
          ? "Ethereum"
          : "Solana"
      }\n` +
      `Name: ${tokenName.trim()}\n` +
      `Symbol: ${tokenSymbol.trim()}\n` +
      `Supply: ${totalSupply}`
    );
  };

  return (
    <form
      className="token-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-header">
        <h2>Create Your Token</h2>

        <p>
          Selected network:{" "}
          <strong>
            {network === "ethereum"
              ? "Ethereum"
              : "Solana"}
          </strong>
        </p>
      </div>

      <label htmlFor="token-name">
        Token Name
      </label>

      <input
        id="token-name"
        type="text"
        placeholder="Example Token"
        value={tokenName}
        onChange={(event) => {
          setTokenName(event.target.value);
          setErrors((current) => ({
            ...current,
            tokenName: ""
          }));
        }}
      />

      {errors.tokenName && (
        <p className="form-error">
          {errors.tokenName}
        </p>
      )}

      <label htmlFor="token-symbol">
        Token Symbol
      </label>

      <input
        id="token-symbol"
        type="text"
        placeholder="EXT"
        maxLength="10"
        value={tokenSymbol}
        onChange={(event) => {
          setTokenSymbol(
            event.target.value.toUpperCase()
          );

          setErrors((current) => ({
            ...current,
            tokenSymbol: ""
          }));
        }}
      />

      {errors.tokenSymbol && (
        <p className="form-error">
          {errors.tokenSymbol}
        </p>
      )}

      <label htmlFor="total-supply">
        Total Supply
      </label>

      <input
        id="total-supply"
        type="number"
        min="1"
        step="1"
        placeholder="1000000"
        value={totalSupply}
        onChange={(event) => {
          setTotalSupply(event.target.value);

          setErrors((current) => ({
            ...current,
            totalSupply: ""
          }));
        }}
      />

      {errors.totalSupply && (
        <p className="form-error">
          {errors.totalSupply}
        </p>
      )}

      <button
        type="submit"
        className="launch-button"
      >
        Continue
      </button>
    </form>
  );
}

export default TokenForm;
