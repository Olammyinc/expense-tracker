import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../utilities/types";


interface TransactionProps {
  transaction: Transaction;
}
const TransactionItem = ({ transaction }: TransactionProps) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

export default TransactionItem;
