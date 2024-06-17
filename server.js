const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");
require("dotenv").config();

const app = express();
const cache = new NodeCache({ stdTTL: 600 }); // แคช10 นาที
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.CMC_API_KEY;

app.get("/:ticker", async (req, res) => {
  const ticker = req.params.ticker.toUpperCase();
  const cacheKey = `crypto_${ticker}`;

  if (cache.has(cacheKey)) {
    console.log("Serving from cache");
    return res.send(cache.get(cacheKey));
  }

  const url1 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${ticker}`;
  const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${ticker}`;

  const options = {
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
    },
  };

  try {
    const [infoResponse, quotesResponse] = await Promise.all([
      axios.get(url1, options),
      axios.get(url2, options),
    ]);
    const name = infoResponse.data.data[ticker].name;
    const price = quotesResponse.data.data[ticker].quote.USD.price;

    const data = { name, price };

    cache.set(cacheKey, data);

    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
