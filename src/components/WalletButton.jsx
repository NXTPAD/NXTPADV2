import React from "react";

function WalletButton() {
  const handleConnect = () => {
    alert("Wallet connection will be added next.");
  };

  return (
    <button
      type="button"
      className="connect-button"
      onClick={handleConnect}
    >
      Connect Wallet
    </button>
  );
}

export default WalletButton;
