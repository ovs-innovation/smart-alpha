"use client";

import { marketInstruments } from "@/content/markets";
import { useQuery } from "@tanstack/react-query";

async function fetchMarkets() {
  // API placeholder — swap this with a live market data endpoint later
  await new Promise((r) => setTimeout(r, 250));
  return marketInstruments;
}

export function useMarkets() {
  return useQuery({
    queryKey: ["markets"],
    queryFn: fetchMarkets,
  });
}
