const express = require('express');
const connectDB = require('./config/db'); // Import the DB connection
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); // Import user routes

require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Use user routes
app.use('/api/users', userRoutes); // Add user routes under /api/users

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});