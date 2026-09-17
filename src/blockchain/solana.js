export async function connectSolanaWallet() {
  const wallet = window.solana;

  if (!wallet) {
    throw new Error(
      "No Solana wallet detected. Please install a compatible Solana wallet."
    );
  }

  if (!wallet.isPhantom) {
    throw new Error(
      "The detected Solana wallet is not currently supported."
    );
  }

  const response = await wallet.connect();

  return {
    wallet,
    publicKey: response.publicKey,
    address: response.publicKey.toString()
  };
}

export async function getSolanaWalletAddress() {
  const wallet = window.solana;

  if (!wallet || !wallet.isConnected || !wallet.publicKey) {
    return null;
  }

  return wallet.publicKey.toString();
}
