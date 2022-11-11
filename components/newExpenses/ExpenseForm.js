import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {
  //useStates of title, date, amount
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // console.log(enteredAmount);
  // console.log(enteredTitle);
  // console.log(enteredDate);

  // const [ userInput,NewUserInput] = useState({
  //   enteredAmount:'',
  //   enteredDate:'',
  //   enteredTitle:''
  // })
  // console.log(userInput)

  //function of title, date, amount
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //method-1
    // NewUserInput({
    //   ...userInput,
    //   enteredTitle : event.target.value});               //method-2
    // NewUserInput((prevState)=>{
    //   return {...prevState, enteredTitle:event.target.value};
    // });                                                  //method-3
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // NewUserInput({
    //   ...userInput,
    //   entereddate : event.target.value});
    // NewUserInput((prevState)=>{
    //   return {...prevState, enteredDate:event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // NewUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value});
    // NewUserInput((prevState)=>{
    //   return {...prevState, enteredAmount:event.target.value};
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData)
    props.onSaveExpenseDate(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={enteredDate}
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
