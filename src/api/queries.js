const cryptoURL = "https://api.coingecko.com/api/v3";
const newsURL = "https://cryptopanic.com/api/v1";

const getRates = async (page) => {
    const response = await fetch(
      `${cryptoURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
    );
    return response.json();
  },
  getCoinInfo = async (coin) => {
    const response = await fetch(`${cryptoURL}/coins/${coin}`);
    return response.json();
  },
  getNews = async (page) => {
    // TODO - work on thi bug
    const response = await fetch('');
    return response.json();
  };

export { getRates, getCoinInfo, getNews };
