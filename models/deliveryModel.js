const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema(
  {
    trackingNumber: {
      type: String,
      required: true,
      unique: true
    },
    senderName: {
      type: String,
      required: true
    },
    receiverName: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['PENDING', 'IN_TRANSIT', 'DELIVERED'],
      default: 'PENDING'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Delivery', deliverySchema);