import { finnhub } from "../helpers/finnhubAPI";

const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
  const apiKey = "cn7fgd1r01qgjtj4j2e0cn7fgd1r01qgjtj4j2eg";
  const apiRes = await fetch(
    `${finnhub}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`
  );

  if (!apiRes.ok) {
    throw new Error(`Symbol ${stockSymbol} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchHistoricalData;
