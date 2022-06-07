import React from "react";
import { FaCamera } from "react-icons/fa";

const ExpenseCard = () => {
  return (
    <div className="card">
      <FaCamera size={50} color="#14b" />
      <p className="card--expense-name">Camera</p>
      <h3 className="card--expense-price">$2,500.00</h3>
    </div>
  );
};

export default ExpenseCard;
