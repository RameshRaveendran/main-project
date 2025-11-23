// requires
require('dotenv').config();
const express = require('express');

// app initialize
const app = express();

// Routes

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("|/////////////////////////////////////|")
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("|/////////////////////////////////////|")
});
