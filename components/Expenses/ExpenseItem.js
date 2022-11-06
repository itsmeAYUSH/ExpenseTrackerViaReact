import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';
import "./ExpenseItem.css";

//chnage title
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => { 
   setTitle('Title Update');
    console.log(title);
  }
  
  //change amount
  const [amount , setAmount] = useState(props.amount);
  const changeAmount= ()=> {
    setAmount('100$')
  }
  //delete expense
  const parentNode = document.getElementsByClassName('expenses')[0];
  const childNode = document.getElementsByClassName('expense-item')[0];
  const deleteExpense = () =>{
      console.log('delete')
      // console.log(parentNode);
      console.log(childNode); 
      if(childNode){
        parentNode.removeChild(childNode);
        console.log('childnode is present')
      }
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <ExpenseDetails title = {title} amount={amount}/>
      <button onClick = {clickHandler} >Change title</button>
      <button onClick = {deleteExpense} >Delete expense</button>
      <button onClick = {changeAmount} >change Amount</button>
    </Card>
  ); 
}
export default ExpenseItem;



