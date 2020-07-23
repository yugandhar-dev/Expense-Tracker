import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="history">
      <p className="history-title">HISTORY</p>
      <hr className="horizontal-line" />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
