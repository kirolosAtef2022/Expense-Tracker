import react from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;

  return(
  <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        id={expense.id}
        date={expense.date}
        amount={expense.amount}
        title={expense.title}
      />
    ))}
  </ul>
  );
};
export default ExpensesList;
