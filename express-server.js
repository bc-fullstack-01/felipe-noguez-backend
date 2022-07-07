const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use(bodyParser.json());
app.use('/', routes);



app.listen(4000);
console.log('server listen on http://localhost:4000')
