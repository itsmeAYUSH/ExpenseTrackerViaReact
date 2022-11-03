import "./ExpenseItem.css";

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">rs {amount}</div>
    </div>
  );
}

export default ExpenseDetails;
