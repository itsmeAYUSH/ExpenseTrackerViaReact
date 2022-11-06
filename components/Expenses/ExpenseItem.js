import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("helloo");
  }
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
      <ExpenseDetails title = {props.title} amount={props.amount}/>
      <button onClick = {clickHandler} >Change title</button>
      <button onClick = {deleteExpense} >Delete expense</button>
    </Card>
  ); 
}
export default ExpenseItem;






////////////////////////////////
// import ExpenseDate from './ExpenseDate.js';
// import ExpenseDetails from './ExpenseDetails.js';
// import Card from '../UI/Card.js';
// import "./ExpenseItem.css";

// const ExpenseItem = (props) => {
//   const clickHandler = () => {
//     console.log("helllo");
//   }
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date = {props.date} />
//       <ExpenseDetails title = {props.title} amount={props.amount}/>
//       <button onClick = {clickHandler} >Change title</button>
    
//     </Card>
//   ); 
// }
// export default ExpenseItem;
