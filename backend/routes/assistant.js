const express = require('express');
const router = express.Router();
const axios = require('axios');
const Log = require('../models/Log');

const SYSTEM_PROMPT = `
You are a backend assistant that receives natural language questions and returns JavaScript code that runs a MongoDB query on a Mongoose model called "Log".

Return only a valid JavaScript expression that can be directly executed to return query results. Examples:
- Log.aggregate([...])
- Log.find(...)
- Log.findOne(...)
- Log.countDocuments(...)
- Log.distinct(...)

Only use the Log model, never use db.logs.
Do not return explanations, formatting, or code blocks—just the code.
`;

router.post('/', async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.post(
      'https://api.mistral.ai/v1/chat/completions',
      {
        model: 'mistral-medium',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: query }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content.trim();

    if (reply.startsWith("db.")) {
      const func = new Function("Log", `return ${reply.replace("db.logs", "Log")}`);
      const result = await func(Log);
      res.json({ response: JSON.stringify(result, null, 2) });
    }
    else if (reply.startsWith("Log.")) {
      const func = new Function("Log", `return ${reply}`);
      const result = await func(Log);
      res.json({ response: JSON.stringify(result, null, 2) });
    } 
     else {
      res.json({ response: reply });
    }
  } catch (err) {
    console.error('Mistral API Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to process request with Mistral.' });
  }
});

module.exports = router;
