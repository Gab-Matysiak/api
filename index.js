const express = require('express');
const app = express();
const users = require('./routes/users');

app.use('api/users', users);

app.get('/api', (req, res) => {
    res.send('hello world')
});

app.listen(1234);
