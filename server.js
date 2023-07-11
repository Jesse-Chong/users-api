const express = require('express');
const app = express();
const users = require('./db.json').users;
const cors = require('cors');
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.get('/users', (req, res) => {
  const formattedUsers = users.map(user => {
    user.lore = user.lore.replace(/\n/g, '\n\n');
    return user;
  });
  res.json(formattedUsers);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});