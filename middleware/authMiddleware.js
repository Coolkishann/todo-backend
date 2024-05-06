const jwt = require('jsonwebtoken');
const createError = require('../utils/createError');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token || req.header('Authorization');
  // console.log("🚀 ~ authMiddleware ~ token:", token)

  if (!token) {
    return next(createError({ status: 401, message: 'No token, authorization denied' }));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // console.log("🚀 ~ jwt.verify ~ process.env.JWT_SECRET:", process.env.JWT_SECRET)
    if (err) {
      return next(createError({ status: 401, message: 'Unauthorized, invalid token' }));
    }
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
