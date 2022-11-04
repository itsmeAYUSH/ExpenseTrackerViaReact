import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from './Card.js';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <ExpenseDetails title = {props.title} amount={props.amount}/>
    </Card>
  ); 
}
export default ExpenseItem;
