const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚚 Delivery Tracking API running on http://localhost:${PORT}`);
});