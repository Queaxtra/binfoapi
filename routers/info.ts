import { Router } from "express";
import axios from "axios";

const router = Router();

const symbols = [
  "BTCUSDT",
  "BTCTRY",
  "BTCEUR",
  "ETHUSDT",
  "ETHTRY",
  "ETHEUR",
  "BNBUSDT",
  "BNBTRY",
  "BNBEUR",
  "ADAUSDT",
  "ADATRY",
  "ADAEUR",
  "XRPUSDT",
  "XRPTRY",
  "XRPEUR",
  "SOLUSDT",
  "SOLTRY",
  "SOLEUR",
  "DOGEUSDT",
  "DOGETRY",
  "DOGEEUR",
  "DOTUSDT",
  "DOTTRY",
  "DOTEUR",
  "SHIBUSDT",
  "SHIBTRY",
  "SHIBEUR",
  "LTCTUSD",
  "LTCTRY",
  "LTCEUR",
  "LTCBTC",
  "ETHBTC",
];

symbols.forEach((symbol) => {
  router.get(`/${symbol.toLowerCase()}`, async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
      );
      res.send(response.data);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch data" });
    }
  });
});

export default router;
