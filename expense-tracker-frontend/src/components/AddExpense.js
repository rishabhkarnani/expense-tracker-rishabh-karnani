import React, { useState } from 'react';

// Add Expense Form Component
const AddExpense = ({ onAdd }) => {
  const [name, setName] = useState('');                               // Expense name state
  const [description, setDescription] = useState('');                 // Description state
  const [category, setCategory] = useState('');                       // Category state
  const [amount, setAmount] = useState('');                           // Amount state
  const [type, setType] = useState('debit');                          // Type (credit/debit) state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, description, category, amount: parseFloat(amount), type });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Your Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Your Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount $"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddExpense;
