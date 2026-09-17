import React from "react";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">NXT PAD</div>

        <nav className="nav">
          <a href="#launch">Launch</a>
          <a href="#tokens">Tokens</a>
          <a href="#about">About</a>
        </nav>

        <button className="connect-button">
          Connect Wallet
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">TOKEN LAUNCHPAD</p>

          <h1>
            Launch your next token.
          </h1>

          <p className="hero-text">
            Create and launch tokens on Ethereum and Solana
            through NXT PAD.
          </p>

          <button className="launch-button">
            Create a Token
          </button>
        </section>

        <section className="networks">
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

      <footer className="footer">
        <p>© 2026 NXT PAD</p>
      </footer>
    </div>
  );
}

export default App;
