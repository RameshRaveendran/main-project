// requires
require('dotenv').config();
const express = require('express');

// require local moudules
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

// app initialize
const app = express();

// Routes
app.use('/user',userRouter);
app.use('/admin',adminRouter);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running' });
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log("|/////////////////////////////////////|")
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("|/////////////////////////////////////|")
});
