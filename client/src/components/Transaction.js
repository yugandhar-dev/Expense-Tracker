import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li
        className={
          transaction.amount < 0 ? "transaction-expense" : "transaction-income"
        }
      >
        {transaction.text}
        <span>{numberWithCommas(transaction.amount)}</span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction._id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
