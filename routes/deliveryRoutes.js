const express = require('express');
const {
  createDelivery,
  getAllDeliveries,
  getDeliveryByTrackingNumber
} = require('../controllers/deliveryController');

const router = express.Router();

/**
 * Create a new delivery
 */
router.post('/', createDelivery);

/**
 * Get all deliveries
 */
router.get('/', getAllDeliveries);

/**
 * Track delivery by tracking number
 */
router.get('/:trackingNumber', getDeliveryByTrackingNumber);

module.exports = router;
