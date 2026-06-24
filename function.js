const getUserById = (id, users, res) => {
  const userExists = users.filter((user) => user.id === id);

  if (!userExists) return res.status(404).json({ message: "User not found with such Id" });

  res.status(200).json(userExists);
};

const filterByRole = (role, users, res) => {
  const userExists = users.filter((user) => user.role === role);
  if (!userExists) return res.status(404).json({ message: "User not found with such role" });

  res.status(200).json(userExists);
};
export { getUserById, filterByRole };
