const express = require('express');
const router = express.Router();

// Example protected route
router.get('/userData', (req, res) => {
  res.json({ message: 'User data accessed successfully' });
});

module.exports = router;
