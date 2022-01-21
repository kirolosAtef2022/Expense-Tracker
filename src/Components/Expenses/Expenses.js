import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  const [yearChosen, setYearChosen] = useState("2020");


  const changeFilterYearHandler = (filteredYear) => {
    setYearChosen(filteredYear);
  };
  const yearChosenArray = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === yearChosen;
  });

 
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearChosen}
          changeFilterYear={changeFilterYearHandler}
        />
        <ExpensesChart expense_Year = {yearChosenArray}/>
        <ExpensesList items = {yearChosenArray}/>
      </Card>
    </li>
  );
};
export default Expenses;
