const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const PORT = 5000;

const users = [
  { id: 1, email: 'user@example.com', password: 'password123' },
];

const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
