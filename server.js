/**
 * Created by Igor on 14.07.2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const routes = require('./routes/api/routes')(app);


db.connect('mongodb://localhost:27017/chat', err => {
    if (err) {
        return console.log(err);
    }
    app.listen(3012, function () {
        console.log('API chat started !!!');
    })
});