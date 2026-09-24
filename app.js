const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const deliveryRoutes = require('./routes/deliveryRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Delivery Tracking API is running 🚚'
  });
});

app.get('/health', (req, res) => {
  const dbStates = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };

  res.status(200).json({
    status: 'ok',
    db: dbStates[mongoose.connection.readyState] || 'disconnected'
  });
});

app.use('/api/deliveries', deliveryRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
