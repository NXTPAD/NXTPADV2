import React, { useState } from "react";

function TokenForm({ network }) {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Token form submitted for ${network}.\n\n` +
      `Name: ${tokenName}\n` +
      `Symbol: ${tokenSymbol}\n` +
      `Supply: ${totalSupply}`
    );
  };

  return (
    <form className="token-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Create Your Token</h2>

        <p>
          Selected network:{" "}
          <strong>{network === "ethereum" ? "Ethereum" : "Solana"}</strong>
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
        onChange={(event) => setTokenName(event.target.value)}
        required
      />

      <label htmlFor="token-symbol">
        Token Symbol
      </label>

      <input
        id="token-symbol"
        type="text"
        placeholder="EXT"
        maxLength="10"
        value={tokenSymbol}
        onChange={(event) =>
          setTokenSymbol(event.target.value.toUpperCase())
        }
        required
      />

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
        onChange={(event) => setTotalSupply(event.target.value)}
        required
      />

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
