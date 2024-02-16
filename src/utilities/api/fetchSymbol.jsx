import { finnhub } from "../helpers/finnhubAPI";

const fetchSymbol = async (input) => {
  const apiKey = "cn7fgd1r01qgjtj4j2e0cn7fgd1r01qgjtj4j2eg";
  const apiRes = await fetch(`${finnhub}/search?q=${input}&token=${apiKey}`);

  if (!apiRes.ok) {
    throw new Error(`Symbol ${input} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchSymbol;
