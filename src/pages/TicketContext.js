// TicketContext.js
import React, { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
};

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  return (
    <TicketContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketContext.Provider>
  );
};
