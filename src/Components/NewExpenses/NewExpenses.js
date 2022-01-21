import "./NewExpenses.css";
import react, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  const newExpenseDataHandler = (newExpense) => {
    const fullExpense = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onGettingExpenseData(fullExpense);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpensesForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={newExpenseDataHandler}
        />
      )}
    </div>
  );
}
export default NewExpenses;
