/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const GeneralContext = createContext(null);

export function GeneralContextProvider({ children }) {
  const [userId] = useState("USERID");

  const [selectedStock, setSelectedStock] = useState(null);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  const openBuyWindow = useCallback((stockName) => {
    setSelectedStock(stockName);
    setIsSellOpen(false);
    setIsBuyOpen(true);
  }, []);

  const openSellWindow = useCallback((stockName) => {
    setSelectedStock(stockName);
    setIsBuyOpen(false);
    setIsSellOpen(true);
  }, []);

  const closeBuyWindow = useCallback(() => {
    setIsBuyOpen(false);
  }, []);

  const closeSellWindow = useCallback(() => {
    setIsSellOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      userId,
      selectedStock,
      isBuyOpen,
      isSellOpen,
      openBuyWindow,
      openSellWindow,
      closeBuyWindow,
      closeSellWindow,
    }),
    [
      userId,
      selectedStock,
      isBuyOpen,
      isSellOpen,
      openBuyWindow,
      openSellWindow,
      closeBuyWindow,
      closeSellWindow,
    ]
  );

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

export function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within GeneralContextProvider");
  }
  return context;
}
