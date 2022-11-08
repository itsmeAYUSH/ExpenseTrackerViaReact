import "./ExpenseForm.css";
import "./NewExpense";
import React, { useState } from "react";

const ExpenseForm = () => {
  //useStates of title, date, amount
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  console.log(enteredAmount);
  console.log(enteredTitle);
  console.log(enteredDate);

  //function of title, date, amount
  const titleChangeHandler = (event) => {
    event.preventDefault();
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    event.preventDefault();
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAmount(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
