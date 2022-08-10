const coingeckoUrl = "https://api.coingecko.com/api/v3";
const cryptocompareUrl = "https://min-api.cryptocompare.com/data/v2";

// Getting all coins
const getRates = async (page) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=true`
  );
  return response.json();
};

const getTopSevenCoins = async () => {
  const response = await fetch(`${coingeckoUrl}/search/trending?vs_currency=usd`);
  return response.json()
};

const getExactCoins = async (coins) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/markets?vs_currency=usd&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d`
  );

  return response.json();
};

//Getting exact coin info
const getCoinInfo = async (coin) => {
  const response = await fetch(`${coingeckoUrl}/coins/${coin}`);
  return response.json();
};

//Getting exact coin graph
const getCoinGraph = async (coin, days, interval) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
  );
  return response.json();
};

//Getting news t
const getNews = async (page) => {
  const response = await fetch(`${cryptocompareUrl}/news/?lang=EN`);
  return response.json();
};

export { getRates, getExactCoins, getCoinInfo, getCoinGraph, getNews, getTopSevenCoins };
