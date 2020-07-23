import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2);
  return (
    <Fragment>
      <div className="total-balance">
        <p>Your Balance</p>
        <h2 className="balance-amount">${numberWithCommas(total)}</h2>
      </div>
    </Fragment>
  );
};

export default TotalBalance;
