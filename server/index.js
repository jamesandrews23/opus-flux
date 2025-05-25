const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/Auth');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
// app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/auth', authRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Serve static files from the Vue app
// const staticPath = path.join(__dirname, '../client/dist/index.html');
// console.log(staticPath);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));