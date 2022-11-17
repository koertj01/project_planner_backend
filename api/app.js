const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const dbUrl = 'insert url for mongo';
const param = { useUnifiedTopology: true, useNewUrlParser: true }

//initialize express
const port = 3000;
const app = express()

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const product = require('./routes/product.route');
app.use('/products', product);

//connect to db
mongoose.connect(dbUrl, param, (err) => {
    if (err) { console.error("Error: " + err); }
    console.log("Connected to db"); // need to work on error collection here and add client side reporting
});

app.listen(port, (err) => {
    if(err) {
        console.error(`Error connecton on pert ${port}: `, err);
    }
    console.log(`Listening on port: ${port}`);
})
