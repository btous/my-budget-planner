import React, { useState, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [query, setQuery] = useState("");

  return (
    <div>
      <form className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search for expenses"
          autoComplete="off"
          aria-label="search expenses"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </form>
      <ul className="list-group">
        {expenses.map((expense) => {
          if (expense.name.toLowerCase().includes(query.toLowerCase())) {
            return (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            );
          } else {
              return null
          }
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
