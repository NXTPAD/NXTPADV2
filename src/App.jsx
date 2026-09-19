import React, { useState } from "react";
import WalletButton from "./components/WalletButton";
import NetworkSelector from "./components/NetworkSelector";
import TokenForm from "./components/TokenForm";

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState("ethereum");
  const [showTokenForm, setShowTokenForm] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="logo"><span className="logo-orbit"><img src="/nxt-logo.svg" alt="" /></span><span>NXT PAD</span></div>

        <nav className="nav">
          <a href="#launch">Launch</a>
          <a href="#tokens">Tokens</a>
          <a href="#about">About</a>
        </nav>

        <WalletButton />
      </header>

      <main>
        <section className="hero" id="launch">
          <p className="eyebrow">TOKEN LAUNCHPAD</p>

          <h1>
            Launch your next token.
          </h1>

          <p className="hero-text">
            Create and launch tokens on Ethereum and Solana
            through NXT PAD.
          </p>

          <NetworkSelector
            selectedNetwork={selectedNetwork}
            onSelect={setSelectedNetwork}
          />

          {!showTokenForm ? (
            <button
              type="button"
              className="launch-button"
              onClick={() => setShowTokenForm(true)}
            >
              Create a Token
            </button>
          ) : (
            <TokenForm network={selectedNetwork} />
          )}
        </section>

        <section className="networks" id="tokens">
          <div className="network-card">
            <h2>Ethereum</h2>

            <p>
              Create tokens on the Ethereum network.
            </p>
          </div>

          <div className="network-card">
            <h2>Solana</h2>

            <p>
              Create tokens on the Solana network.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>© 2026 NXT PAD</p>
      </footer>
    </div>
  );
}

export default App;
