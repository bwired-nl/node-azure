const express = require('express');
const app = express();
var port = process.env.port || 3002;

app.get('/', (req, res) => res.send(process.env));
app.listen (port, () => console.log('Server is running on port: ' + port));

