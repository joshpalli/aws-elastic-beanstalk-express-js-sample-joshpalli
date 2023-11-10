const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Full Pipeline Test. If you see this message, the pipline test was a success!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
