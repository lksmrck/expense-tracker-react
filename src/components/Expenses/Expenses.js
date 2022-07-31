import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Statistics from "../chart/Statistics";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filteredChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Zobrazení "Show statistics" button ze Statistics komponentu, pokud v daném roce existuje nějaký expense.
  function StatisticsButton() {
    if (filteredExpenses.length > 0) {
      return <Statistics expenses={filteredExpenses} />;
    }
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList
          items={filteredExpenses}
          onDeleteExpense={props.onDeleteExpense}
        />
        <StatisticsButton />
      </Card>
    </div>
  );
}

export default Expenses;
