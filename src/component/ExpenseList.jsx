import React from 'react';

function ExpenseList() {
  const expenses = [];

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.category}</span>
            <span>{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
