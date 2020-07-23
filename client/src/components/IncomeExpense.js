import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, value) => acc + value.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, value) => acc + value.amount, 0)
    .toFixed(2);

  return (
    <div className="income-expense">
      <div className="income-box">
        <p>INCOME</p>
        <h3 className="income-amount">$ {numberWithCommas(income)}</h3>
      </div>

      <div className="expense-box">
        <p>EXPENSE</p>
        <h3 className="expense-amount">$ {numberWithCommas(expense)}</h3>
      </div>
    </div>
  );
};

export default IncomeExpense;
