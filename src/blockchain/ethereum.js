import { BrowserProvider } from "ethers";

export async function connectEthereumWallet() {
  if (!window.ethereum) {
    throw new Error(
      "No Ethereum wallet detected. Please install a compatible wallet."
    );
  }

  const provider = new BrowserProvider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  const network = await provider.getNetwork();

  return {
    provider,
    signer,
    address,
    chainId: Number(network.chainId)
  };
}

export async function getEthereumWalletAddress() {
  if (!window.ethereum) {
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_accounts", []);

  return accounts.length > 0 ? accounts[0] : null;
}
