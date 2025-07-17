const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const logsRoute = require('./routes/logs');
const assistantRoutes = require('./routes/assistant');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use('/api/logs', logsRoute);
app.use('/api/assistant', assistantRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));