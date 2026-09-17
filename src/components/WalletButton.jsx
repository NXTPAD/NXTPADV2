import React, { useState } from "react";
import { connectEthereumWallet } from "../blockchain/ethereum";
import { connectSolanaWallet } from "../blockchain/solana";

function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("");
  const [error, setError] = useState("");

  const handleConnect = async () => {
    setError("");

    try {
      if (window.ethereum) {
        const result = await connectEthereumWallet();

        setConnected(true);
        setAddress(result.address);
        setNetwork("Ethereum");
        return;
      }

      if (window.solana) {
        const result = await connectSolanaWallet();

        setConnected(true);
        setAddress(result.address);
        setNetwork("Solana");
        return;
      }

      throw new Error(
        "No supported wallet was detected."
      );
    } catch (connectionError) {
      console.error(connectionError);

      setError(
        connectionError?.message ||
          "Wallet connection failed."
      );
    }
  };

  const shortenAddress = (walletAddress) => {
    if (!walletAddress) {
      return "";
    }

    if (walletAddress.length <= 12) {
      return walletAddress;
    }

    return `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
  };

  if (connected) {
    return (
      <div className="wallet-status">
        <span className="wallet-network">
          {network}
        </span>

        <span className="wallet-address">
          {shortenAddress(address)}
        </span>
      </div>
    );
  }

  return (
    <div className="wallet-wrapper">
      <button
        type="button"
        className="connect-button"
        onClick={handleConnect}
      >
        Connect Wallet
      </button>

      {error && (
        <p className="wallet-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default WalletButton;
