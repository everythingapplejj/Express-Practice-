const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to handle routes related to users
const userRouter = require('./routes/users');
app.use('/users', userRouter);

// Route handler for the root URL

// Start the server on port 3001
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

