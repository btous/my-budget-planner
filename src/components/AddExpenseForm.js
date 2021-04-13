import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row d-flex align-items-end">
        <div className="col-sm pl-0">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            required="required"
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm pl-0">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            autoComplete="off"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm pl-0">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
