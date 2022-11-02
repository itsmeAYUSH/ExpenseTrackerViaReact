import "./ExpenseItem.css";

function ExpenseItem() {
    const  expenseDate = new Date(2022 , 11 , 2);
    const expenseTitle = 'Food';
    const expenseAmount = 10;
    const locationOfExpense = 'Mumbai';
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__description">{locationOfExpense}</div>
        <div className="expense-item__price">rs {expenseAmount}</div>
        
      </div>
    </div>
  ); 
}
export default ExpenseItem;
