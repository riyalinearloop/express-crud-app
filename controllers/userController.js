const userService = require("../services/userService");

const addUser = async (req, res) => {
  try {
    await userService.addUser(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    await userService.getUsers(req, res);
  } catch (e) {
    res.status(400).json({ error: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    await userService.getUserById(req, res);
  } catch (e) {
    res.status(400).json({ error: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    await userService.updateUser(req, res);
  } catch (e) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req, res);
  } catch (e) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUsersById,
  updateUsers,
  deleteUser,
};
