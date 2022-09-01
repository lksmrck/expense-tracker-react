import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  //Když nejsou přidané žádné expensy
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        {" "}
        No expenses found. Maybe add one?
      </h2>
    );
  }
  //Když jsou přidané expensy
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount.toLocaleString("en-US")}
          date={expense.date}
          onDeleteExpense={props.onDeleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
