import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => {
          return expense.id !== action.payload;
        })
      }
    case "EDIT_BUDGET":
      return {
        ...state,
        editBudget: true
      }
    case "UPDATE_BUDGET":
      return {
        ...state,
        editBudget: false,
        budget: action.payload
      }
    default:
      return state;
  }
};
const initialState = {
  budget: 3000,
  expenses: [
    { id: 1, name: "Expense exemple 1", cost: 200 },
    { id: 2, name: "Expense exemple 2", cost: 300 },
    { id: 3, name: "Expense exemple 3", cost: 500 },
  ],
  editBudget: false,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        editBudget: state.editBudget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
