import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary py-0 h-100 d-flex align-items-center">
      <span>Spent so far: €{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
