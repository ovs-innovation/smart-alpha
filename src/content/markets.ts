export type MarketInstrument = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  /** Sparkline points — API placeholder for future live feeds */
  sparkline: number[];
  currency?: string;
};

/** Mock market data — replace with live API integration */
export const marketInstruments: MarketInstrument[] = [
  {
    id: "nifty",
    symbol: "NIFTY",
    name: "Nifty 50",
    price: 24812.45,
    changePercent: 0.84,
    sparkline: [24100, 24220, 24180, 24350, 24410, 24390, 24520, 24680, 24740, 24812],
  },
  {
    id: "sensex",
    symbol: "SENSEX",
    name: "BSE Sensex",
    price: 81456.2,
    changePercent: 0.72,
    sparkline: [79800, 80120, 79950, 80400, 80750, 80620, 80980, 81200, 81340, 81456],
  },
  {
    id: "banknifty",
    symbol: "BANKNIFTY",
    name: "Bank Nifty",
    price: 52104.8,
    changePercent: -0.35,
    sparkline: [52800, 52650, 52520, 52400, 52340, 52480, 52310, 52200, 52150, 52104],
  },
  {
    id: "gold",
    symbol: "GOLD",
    name: "Gold (MCX)",
    price: 76420,
    changePercent: 0.48,
    sparkline: [75200, 75450, 75600, 75520, 75800, 75950, 76100, 76240, 76350, 76420],
    currency: "INR/10g",
  },
  {
    id: "silver",
    symbol: "SILVER",
    name: "Silver (MCX)",
    price: 91250,
    changePercent: -0.62,
    sparkline: [92800, 92500, 92200, 92050, 91800, 91950, 91700, 91520, 91380, 91250],
    currency: "INR/kg",
  },
  {
    id: "usdinr",
    symbol: "USD/INR",
    name: "US Dollar",
    price: 83.42,
    changePercent: 0.12,
    sparkline: [83.1, 83.18, 83.22, 83.15, 83.28, 83.3, 83.25, 83.35, 83.38, 83.42],
  },
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: 68450,
    changePercent: 2.14,
    sparkline: [64200, 65100, 64800, 65500, 66200, 65800, 66800, 67500, 68100, 68450],
    currency: "USD",
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: 3420.5,
    changePercent: 1.68,
    sparkline: [3180, 3220, 3205, 3280, 3310, 3290, 3345, 3380, 3405, 3420],
    currency: "USD",
  },
];
