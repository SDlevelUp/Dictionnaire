const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const RouteDefinitions = require('./routes/definitions');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});


mongoose.connect('mongodb+srv://sarahberri:<password>@dico.jadugee.mongodb.net/',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {

        console.log("Connexion successful");
    }).catch((error) => {
        console.log(error);
    });

app.use(bodyParser.json());
app.use('/api/definitions/', RouteDefinitions)

module.exports = app;