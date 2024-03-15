import React, { useState } from 'react';

function ExpenseForm() {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} />
      <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
