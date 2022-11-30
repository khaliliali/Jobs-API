const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
  console.log(task);
};

const login = async (req, res) => {
  
  res.send('login');
};

module.exports = { register, login };
