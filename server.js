const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Server
const PORT = process.env.PORT || 8080;
console.log('Loaded API key:', process.env.SENDGRID_API_KEY ? 'OK' : 'MISSING');

const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

