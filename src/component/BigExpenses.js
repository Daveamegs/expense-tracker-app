import React from "react";
import ExpenseCard from "./ExpenseCard";

const BigExpenses = () => {
  return (
    <div className="biggest-expense">
      <h3>Categories with Biggest Expense</h3>
      <div className="big-expenses">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
};

export default BigExpenses;
