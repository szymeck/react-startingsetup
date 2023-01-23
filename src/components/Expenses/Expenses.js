import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const [filteredYear, setFilteredYear] = useState("2020");
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectedYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
