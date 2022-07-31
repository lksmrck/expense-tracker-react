import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [isValid, setIsValid] = useState(true);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  //Validation
  function submitHandler(event) {
    event.preventDefault();
    if (
      enteredTitle.trim().length > 0 &&
      enteredAmount.trim().length > 0 &&
      enteredDate.trim().length > 0
    ) {
      setIsValid(true);

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
    setIsValid(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2020-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="bottom-container">
          <p>
            {" "}
            <span
              className={isValid ? "validation-valid" : "validation-invalid"}
            >
              Please fill in all inputs.
            </span>
          </p>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button onClick={props.onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
