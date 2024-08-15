const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/expense_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
