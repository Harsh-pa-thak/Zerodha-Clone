/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const GeneralContext = createContext(null);

export function GeneralContextProvider({ children }) {
  const [userId] = useState("USERID");

  const value = useMemo(() => ({ userId }), [userId]);

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
