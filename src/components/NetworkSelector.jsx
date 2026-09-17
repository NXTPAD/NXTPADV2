import React from "react";

function NetworkSelector({ selectedNetwork, onSelect }) {
  return (
    <div className="network-selector">
      <button
        type="button"
        className={
          selectedNetwork === "ethereum"
            ? "network-option active"
            : "network-option"
        }
        onClick={() => onSelect("ethereum")}
      >
        <span className="network-name">Ethereum</span>
        <span className="network-symbol">ETH</span>
      </button>

      <button
        type="button"
        className={
          selectedNetwork === "solana"
            ? "network-option active"
            : "network-option"
        }
        onClick={() => onSelect("solana")}
      >
        <span className="network-name">Solana</span>
        <span className="network-symbol">SOL</span>
      </button>
    </div>
  );
}

export default NetworkSelector;
