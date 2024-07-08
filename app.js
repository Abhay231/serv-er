const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// const g
const port = process.env.port || 8080
// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDnpmB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
