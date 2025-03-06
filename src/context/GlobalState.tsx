import { createContext, ReactNode, useReducer } from "react";
import AppReducer from './AppReducer';
//import AddTransaction from "../components/AddTransaction";

interface Transaction {
    id: number;
    text: string;
    amount: number;
}

interface InitialStateType {
    transactions: Transaction[];
    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: Transaction) => void;

}

// Initial state
const initialState: InitialStateType = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    deleteTransaction: () => {},
    addTransaction: () => {}
} 

//Create context
export const GlobalContext = createContext<InitialStateType>(initialState);

// Provider component
export const GlobalProvider = ( {children}: {children: ReactNode} ) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action -> make call to reducer
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  //action -> add another transaction
  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}