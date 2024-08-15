import React, { useState } from 'react';
import Register from './components/Register';
import AddExpense from './components/AddExpense';
import ExpenseHistory from './components/ExpenseHistory';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
  const [user, setUser] = useState(null);                                    // User state
  const [transactions, setTransactions] = useState([]);                      // Transactions state
  const [showAddExpense, setShowAddExpense] = useState(false);               // State to toggle "Add Expense" form

  // Handle user registration
  const handleRegister = (userData) => {
    setUser(userData);
  };

  // Handle adding a new expense
  const handleAddExpense = (expense) => {
    setTransactions([...transactions, { ...expense, _id: new Date().getTime() }]);
    setShowAddExpense(false);                                                 // Hide the form after adding the entry
  };

  // Toggle the "Add Expense" form
  const toggleAddExpense = () => {
    setShowAddExpense(!showAddExpense);
  };

  // Render registration form if user is not registered
  if (!user) {
    return (
      <div className="container">
        <h1>Register</h1>
        <Register onRegister={handleRegister} />
      </div>
    );
  }

  // Render dashboard if user is registered
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button className="add-expense-btn" onClick={toggleAddExpense}>
        {showAddExpense ? "Close" : "Add Expense"}
      </button>
      {showAddExpense && <AddExpense onAdd={handleAddExpense} />}
      <ExpenseChart transactions={transactions} />
      <div className="expense-history">
        <h3>Expense History</h3>
        <div className="expense-box">
          <ExpenseHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
