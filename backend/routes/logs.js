const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortBy = req.query.sortBy || 'timestamp';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    const filters = {};
    if (req.query.country) {
      filters.country_code = req.query.country;
    }
    if (req.query.client) {
      filters.transactionSourceName = { $regex: req.query.client, $options: 'i' }; 
    }

    const total = await Log.countDocuments(filters);
    const logs = await Log
      .find(filters)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      logs,
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total
    });
  } catch (err) {
    console.error('Pagination error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;