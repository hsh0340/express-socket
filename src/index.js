const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});