const Log = require('../models/Log');

exports.getLogs = async (req, res) => {
  try {
    const {
      client,
      country,
      from,
      to,
      page = 1,
      pageSize = 20
    } = req.query;

    const query = {};

    if (client) query.transactionSourceName = client;
    if (country) query.country_code = country;
    if (from || to) {
      query.timestamp = {};
      if (from) query.timestamp.$gte = new Date(from);
      if (to) query.timestamp.$lte = new Date(to);
    }

    const skip = (parseInt(page) - 1) * parseInt(pageSize);

    const total = await Log.countDocuments(query);
    const logs = await Log.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(parseInt(pageSize));

    res.json({
      total,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      data: logs
    });
  } catch (err) {
    console.error('Error fetching logs:', err);
    res.status(500).json({ error: 'Server error' });
  }
};