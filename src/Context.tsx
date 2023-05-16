import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducers";
import { ItemType } from "./components/CardItem";
import cartItems from "./data/data";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

interface ContextType {
  loading: boolean;
  cart: ItemType[];
  total: number;
  amount: number;
  clearCart: () => void;
  remove: (id: any) => void;
  increase: (id: any) => void;
  decrease: (id: any) => void;
  fetchData: () => void;
  toggleAmount: (id: any, type: any) => void;
}

const AppContext = React.createContext<ContextType>({
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
  clearCart: () => {},
  remove: (id: any) => {},
  increase: (id: any) => {},
  decrease: (id: any) => {},
  fetchData: () => {},
  toggleAmount: (id: any, type: any) => {},
});

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id : any) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id : any) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id : any) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };
  const toggleAmount = (id : any, type : any) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

