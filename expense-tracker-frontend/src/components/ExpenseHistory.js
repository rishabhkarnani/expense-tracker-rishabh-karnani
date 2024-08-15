import React, { useState } from 'react';

// Expense History Component
const ExpenseHistory = ({ transactions }) => {
  const [hoveredId, setHoveredId] = useState(null);                                  // Hovered expense ID

  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className={transaction.type}
            onMouseEnter={() => setHoveredId(transaction._id)}                       // Set hovered ID
            onMouseLeave={() => setHoveredId(null)}                                  // Reset hovered ID
          >
            {transaction.name} - {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
            {hoveredId === transaction._id && (
              <div className="expense-details">
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Category:</strong> {transaction.category}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h3 className="total">
        Total - ${transactions.reduce((acc, transaction) => {
          return transaction.type === 'credit' ? acc + transaction.amount : acc - transaction.amount;
        }, 0)} {/* Calculate total */}
      </h3>
    </div>
  );
};

export default ExpenseHistory;
