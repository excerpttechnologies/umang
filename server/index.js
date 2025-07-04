const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const connectDB = require('./config/db');  // Import the database connection
const contactRoutes = require('./router/contactRoutes');
const inquiryRoutes = require('./router/inquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Use the routes
app.use('/api', contactRoutes);
app.use('/api', inquiryRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route all other requests to serve 'index.html' for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
