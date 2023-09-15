import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

const Context = createContext();

export const useGlobalContext = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    console.log("add transaction")
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <Context.Provider
    value={{
      transactions: state.transactions,
      addTransaction,
    }}
  >
    {children}
  </Context.Provider>
  )
};
