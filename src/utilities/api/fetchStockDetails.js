import { finnhub } from "../helpers/finnhubAPI";

const fetchStockDetails = async (stockSymbol) => {
  const apiKey = "cn7fgd1r01qgjtj4j2e0cn7fgd1r01qgjtj4j2eg";
  const apiRes = await fetch(
    `${finnhub}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`
  );

  if (!apiRes.ok) {
    throw new Error(`Symbol ${stockSymbol} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchStockDetails;
