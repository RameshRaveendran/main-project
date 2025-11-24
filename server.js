// requires
require('dotenv').config();
const express = require('express');

// require local moudules
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const path = require("path");

// app initialize
const app = express();

// view engine configurations
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
// static assests
app.use(express.static('public'));

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
