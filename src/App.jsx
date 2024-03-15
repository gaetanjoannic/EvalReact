import React from 'react';
import './App.css';
import ExpenseForm from 'src/component/ExpenseForm.jsx';
import ExpenseList from 'src/component/ExpenseList.jsx';
import CategoryList from 'src/component/selectCategory.jsx';

function App() {
  const categories = ['Alimentation', 'Logement', 'Transport', 'Divertissement', 'Santé', 'Éducation', 'Autres'];
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
      <CategoryList categories={categories} />
    </div>
  );
}

export default App;
