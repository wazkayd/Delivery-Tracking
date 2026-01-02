const Delivery = require('../models/deliveryModel');
const crypto = require('crypto');

/**
 * Create a delivery
 */
const createDelivery = async (req, res) => {
  try {
    const trackingNumber = crypto.randomBytes(6).toString('hex');

    const delivery = await Delivery.create({
      ...req.body,
      trackingNumber
    });

    res.status(201).json({
      message: 'Delivery created successfully',
      data: delivery
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get all deliveries
 */
const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().sort({ createdAt: -1 });
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Track by tracking number
 */
const getDeliveryByTrackingNumber = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({
      trackingNumber: req.params.trackingNumber
    });

    if (!delivery) {
      return res.status(404).json({ message: 'Tracking number not found' });
    }

    res.json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDelivery,
  getAllDeliveries,
  getDeliveryByTrackingNumber
};