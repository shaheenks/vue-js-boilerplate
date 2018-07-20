const express = require('express');

const bodyParser = require('body-parser')

const port = process.env.PORT || 8000
const app = express();

// serve static assets normally
app.use('/', express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
   console.log('GET request received.')
   res.send('Working'); 
});

app.listen(port, () => {
    console.log('Server Started at ' + port);
})