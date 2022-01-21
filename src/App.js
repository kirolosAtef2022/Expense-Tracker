import React, {useState} from "react";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 940.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.58,
      date: new Date(2021, 5, 12),
    }
  ];
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const gettingExpenseDataHandler = (newExpenseData) => {
    setExpenses(prevState => [newExpenseData, ...prevState]);
    
  };

  return (
    <div>
      <NewExpenses onGettingExpenseData={gettingExpenseDataHandler} />
      <Expenses items={expenses}>
      </Expenses>
    </div>
  );
};

export default App;
