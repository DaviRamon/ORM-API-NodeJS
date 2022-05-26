const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()); // converte as req para JSON.
const port = 4000;

app.get('/test', (req, res) => res 
     .status(200)
     .send({ message: 'deu boa!'})
)

app.listen(port, () => console.log(`listening on port ${port}`));


module.exports = app;