let userArray = [];

const addUser = async (req, res) => {
  const body = { ...req.body, id: userArray?.length };
  const nameArray = userArray?.map((u) => u?.name);
  if (req && nameArray.includes(req.body?.name)) {
    throw new Error("Same name not allowed!");
  } else {
    userArray.push(body);
  }
  res.status(200).json({
    message: "User added successfully!",
    user: body,
  });
};

const getUsers = async (req, res) => {
  res.status(200).json(userArray);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = userArray.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  } else {
    res.status(200).json({ user: user });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  let userToUpdate = userArray.find((u) => u.id === parseInt(id));

  if (!userToUpdate) {
    return res.status(404).json({ error: "User not found" });
  }
  userToUpdate.name = name;
  userToUpdate.age = age;

  res.status(200).json({
    message: "User updated successfully",
    user: userToUpdate,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = userArray.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  } else {
    userArray = userArray.filter((u) => u.id !== parseInt(id));
    res.status(200).json({ message: "User deleted successfully" });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
