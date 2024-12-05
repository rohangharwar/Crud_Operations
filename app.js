require('dotenv').config(); // Load .env variables
require('./config/db'); // Initialize DB connection

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Parse incoming JSON

// Use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});