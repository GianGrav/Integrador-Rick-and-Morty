const users = require('../utils/users');

module.exports = (req, res) => {
  const { email, password } = req.query;

  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

