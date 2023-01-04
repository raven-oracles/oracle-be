import { Market, IMarket } from "../models/Market";
import CoinGecko from "coingecko-api";

export const marketsWatcher = async (): Promise<void> => {
	const CoinGeckoClient = new CoinGecko();
	const tonPrice = (await CoinGeckoClient.coins.fetch("the-open-network", {})).data
			.market_data.current_price.usd;

  await Market.create(
    {
      coin: "Ton",
      price: Number(tonPrice) * 1000000000,
    }
  )
};
