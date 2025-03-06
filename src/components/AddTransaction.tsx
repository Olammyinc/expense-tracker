import { useState, useContext, FormEvent } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount)
    }
    addTransaction(newTransaction);
    setText(""); 
    setAmount(0);
  }
    return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={ onSubmit }>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value === "" ? 0 : Number(e.target.value))} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction