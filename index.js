const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Deployed via GitHub Actions'));
app.listen(3000, () => console.log('App running on port 3000'));
// whitespace change
// trigger GitHub Actions
