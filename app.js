const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(' Hello From Node.js CI/CD Pipeline on VM!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
