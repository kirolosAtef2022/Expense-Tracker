import react, { useState } from "react";
import "./ExpensesForm.css";
function ExpensesForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //or Combined States
  //const [userInput, setUserInput] = useState({
  // changedTitle : '',
  // changedAmount : '',
  // changedDate : ''
  //});
  const titleChangedHandler = (event) => {
    //setUserInput((prevState)=>
    // {
    //return(
    //   ...prevState,
    //  changedTitle : event.target.value
    //);
    //}
    //  )
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type ="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpensesForm;
