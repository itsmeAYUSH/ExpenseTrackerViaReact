import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()    
        };
        // console.log(expenseData)
        props.onAddExpense(expenseData);
      }
  return (
    <div className="new-expense" id="expid">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
