import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Porsche car",
    amount: 500000,
    date: new Date(2020, 9, 12),
  },
  { id: "e2", title: "Groceries", amount: 540, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2580,
    date: new Date(2021, 1, 22),
  },
  {
    id: "e4",
    title: "Big Mac menu",
    amount: 150,
    date: new Date(2021, 0, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function onDeleteExpense(expenseId) {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseId
      );
      return updatedExpenses;
    });
  }

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDeleteExpense={onDeleteExpense} />
    </div>
  );
};

export default App;
