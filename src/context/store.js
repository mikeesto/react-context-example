import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [item, setItem] = useState("Bubblegum");

  return (
    <StoreContext.Provider value={[item, setItem]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
