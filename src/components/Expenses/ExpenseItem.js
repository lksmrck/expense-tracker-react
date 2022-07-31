import React from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { FcCancel } from "react-icons/fc";

function ExpenseItem(props) {
  const deleteHandler = () => {
    props.onDeleteExpense(props.id);
  };
  return (
    <li>
      <Card className="expense-item">
        <div className="cancel" onClick={deleteHandler}>
          <FcCancel className="cancel-icon" />
        </div>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">{props.amount} CZK</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
