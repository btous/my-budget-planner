import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, editBudget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const onEdit = (event) => {
    event.preventDefault();
    dispatch({
        type: "EDIT_BUDGET",
    });
  };

  const onSave = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_BUDGET",
      payload: newBudget,
    });
  };
  return (
    <div className="alert alert-secondary py-0 h-100 d-flex align-items-center">
      {editBudget ? (
        <form className="w-100 d-flex justify-content-between align-items-center" onSubmit={onSave}>
          <input
            type="number"
            value={newBudget}
            onChange={(event) => (setNewBudget(event.target.value))}
          ></input>
          <button className="btn btn-primary ml-3" type="submit">
            Save
          </button>
        </form>
      ) : (
        <form className="w-100 d-flex justify-content-between align-items-center">
          <span>Budget: €{budget}</span>
          <button className="btn btn-primary ml-3" onClick={onEdit}>Edit</button>
        </form>
      )}
    </div>
  );
};

export default Budget;
