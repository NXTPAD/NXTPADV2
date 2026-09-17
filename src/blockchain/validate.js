export function validateTokenDetails({
  tokenName,
  tokenSymbol,
  totalSupply
}) {
  const errors = {};

  const name = String(tokenName || "").trim();
  const symbol = String(tokenSymbol || "").trim();
  const supply = String(totalSupply || "").trim();

  if (!name) {
    errors.tokenName = "Token name is required.";
  } else if (name.length > 50) {
    errors.tokenName =
      "Token name must be 50 characters or less.";
  }

  if (!symbol) {
    errors.tokenSymbol = "Token symbol is required.";
  } else if (!/^[A-Z0-9]{1,10}$/.test(symbol)) {
    errors.tokenSymbol =
      "Token symbol must contain 1-10 letters or numbers.";
  }

  if (!supply) {
    errors.totalSupply = "Total supply is required.";
  } else {
    const numericSupply = Number(supply);

    if (!Number.isSafeInteger(numericSupply)) {
      errors.totalSupply =
        "Total supply must be a whole number within the supported range.";
    } else if (numericSupply <= 0) {
      errors.totalSupply =
        "Total supply must be greater than zero.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
