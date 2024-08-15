// src/components/ExpenseChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  // Group transactions by category
  const categories = transactions.reduce((acc, transaction) => {
    const { category, amount, type } = transaction;
    const key = `${category} (${type})`;
    acc[key] = acc[key] ? acc[key] + amount : amount;
    return acc;
  }, {});

  // Data for the chart
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: 'Expense Amount',
        data: Object.values(categories),
        backgroundColor: Object.keys(categories).map(category => category.includes('credit') ? '#2ecc71' : '#e74c3c'), // Green for credit, red for debit
      },
    ],
  };

  return (
    <div>
      <h3>Expense Breakdown</h3>
      <Bar data={data} />
    </div>
  );
};

export default ExpenseChart;
