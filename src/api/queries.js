const baseURL = "https://api.coingecko.com/api/v3";

export const getRates = async () => {
  const response = await fetch(
    `${baseURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
  return response.json();
};
