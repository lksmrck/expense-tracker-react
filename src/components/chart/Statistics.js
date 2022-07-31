import React from "react";
import "./Statistics.css";
import { useState } from "react";
import ExpensesChart from "../Expenses/ExpensesChart";

export default function Statistics(props) {
  const [isStatClicked, setIsStatClicked] = useState(false);

  const Backdrop = (props) => {
    return (
      <div className="backdrop" onClick={statButtonClickHandler}>
        {props.children}
      </div>
    );
  };

  const statButtonClickHandler = () => {
    setIsStatClicked(!isStatClicked);
  };

  return (
    <div>
      {!isStatClicked ? (
        <button className="stat-button" onClick={statButtonClickHandler}>
          Show statistics
        </button>
      ) : (
        <Backdrop>
          <ExpensesChart expenses={props.expenses} />
          <div className="btn-back-container">
            <button
              className="stat-button-back"
              onClick={statButtonClickHandler}
            >
              Take me back
            </button>
          </div>
        </Backdrop>
      )}
    </div>
  );
}
