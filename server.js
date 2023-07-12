const express = require('express');
const app = express();
const users = require('./db.json').users;
const cors = require('cors');
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.get('/users/:id', (req, res) => {
const championId = parseInt(req.params.id);
const champion = users.find(user => user.id === championId);
if(champion) {
    res.json(champion);
} else {
    res.status(404).json({ message: 'Champion not found' });
}
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});