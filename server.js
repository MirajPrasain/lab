const express = require('express');
const app = express();
const PORT = 3000;


const hits = {
  index: 0,
  page1: 0,
  page2: 0,
};


app.use(express.static('public'));


app.get('/hits/:page', (req, res) => {
  const page = req.params.page;
  hits[page]++;
  res.json({ page: page, count: hits[page] });
});


app.listen(PORT, () => {
  console.log(`Server running`);
});