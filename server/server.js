// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 8000;

app.use(cors({
  origin: 'http://localhost:3000', // change this as needed
  credentials: true
}));
app.use(bodyParser.json());

// Dummy user
const users = [{ username: "testuser", password: "testpass" }];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, token: 'mock-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Google Search or Mocked Results
app.get('/api/search', async (req, res) => {
  const { q } = req.query;
  // Uncomment below for real Google API, with your API_KEY & CX
  // const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
  //   params: {
  //     key: 'YOUR_API_KEY',
  //     cx: 'YOUR_CX',
  //     q
  //   }
  // });
  // const items = response.data.items.slice(0,5).map(item => ({
  //   title: item.title,
  //   link: item.link
  // }));

  // MOCK results:
  const items = [
    { title: "Animal", link: "https://en.wikipedia.org/wiki/Animal" },
    { title: "Names of Animals in English", link: "https://byjus.com/english/animals-name/" },
    { title: "Animals | National Geographic Kids", link: "https://kids.nationalgeographic.com/animals" },
    { title: "Animal | Definition, Types, & Facts", link: "https://www.britannica.com/animal/animal" },
    { title: "Animals A to Z", link: "https://www.montereybayaquarium.org/animals/animals-a-to-z?filterBy=" }
  ];
  res.json(items);
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
