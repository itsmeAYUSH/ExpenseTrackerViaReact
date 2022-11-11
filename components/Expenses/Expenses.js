import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filterExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;  