const jwt = require('jsonwebtoken');

// This middleware checks for a JWT token in the request cookies, verifies it, 
// and attaches the decoded user information to the request object. 
// If the token is missing or invalid, it sends an appropriate error response.
// This is useful for protecting routes that require authentication, ensuring 
// that only users with a valid token can access them.
module.exports = function (req, res, next) {
  const token = req.cookies.token; // or from headers

  if (!token) {
    return res.status(401).json({ message: 'Access denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
