const express = require('express');
const dotenv = require('dotenv');
const deliveryRoutes = require('./routes/deliveryRoutes');

dotenv.config();

const app = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Health check / base route
 */
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Delivery Tracking API is running 🚚',
    status: 'OK'
  });
});

app.use('/api/deliveries', deliveryRoutes);

module.exports = app;