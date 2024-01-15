export const exchangeRates = {
  USD: 1,
  GBP: 0.75,
  JPY: 110,
  AUD: 1.3,
};

export const convertPrice = (price, currency) => {
  return (price * exchangeRates[currency]).toFixed(2);
};
