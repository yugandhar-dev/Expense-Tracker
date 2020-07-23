import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const addRow = (e) => {
    e.preventDefault();
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(transaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={addRow}>
      <div className="add-transaction">
        <p>Add New Transaction</p>
        <hr className="horizontal-line" />
        <p>Text</p>
        <input
          type="text"
          className="input-transaction"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <p>Amount</p>
        <span>(negative - expense; positive - income)</span>
        <input
          type="number"
          className="transaction-amount"
          placeholder="Enter Amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button className="add-btn" type="submit">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default AddTransaction;
