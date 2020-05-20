const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('hello ' + req.headers.user + '!'))

app.listen(8080)