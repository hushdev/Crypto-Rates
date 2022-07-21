const cryptoURL = "https://api.coingecko.com/api/v3";
const newsURL = "https://min-api.cryptocompare.com/data/v2";

const getRates = async (page) => {
    const response = await fetch(
      `${cryptoURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${page}&sparkline=false`
    );
    return response.json();
  },
  getCoinInfo = async (coin) => {
    const response = await fetch(`${cryptoURL}/coins/${coin}`);
    return response.json();
  },
  getNews = async (page) => {
    const response = await fetch(`${newsURL}/news/?lang=EN`);
    return response.json();
  };

export { getRates, getCoinInfo, getNews };
