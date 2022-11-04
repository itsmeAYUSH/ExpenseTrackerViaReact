import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <ExpenseDetails title = {props.title} amount={props.amount}/>
    </Card>
  ); 
}
export default ExpenseItem;


//////////////react///////////////

// import ExpenseDate from './ExpenseDate.js';
// import ExpenseDetails from './ExpenseDetails.js';
// import Card from './Card.js';
// import "./ExpenseItem.css";
// import React from 'react';

// /*return (
// <div className='expense-item'>
//   <ExpenseDate date ={props.date} />
// <div>
// <h1>
//   Expense 1
// </h1>
// <h1>
//   Expense 1
// </h1>
// </div>
// <div>
// )
// */
// function ExpenseItem(props) {
  
//   // return React.createElement(
//   //   'div',
//   //   {},
//   //   React.createElement(ExpenseDate, {date:props.date}),
//   //   React.createElement('h1',{},"Expense 1"),
//   //   React.createElement('h1',{},"Expense 1"),
//   // )

// }
// export default ExpenseItem;
