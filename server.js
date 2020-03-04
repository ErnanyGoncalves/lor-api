const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const Champion = require('./Champion');

const app = express();

let championsAPI = {
    count: 0,
    result: []
};

// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json(championsAPI);
});

app.listen(3000, () => {
    const results = fs.readFileSync("champs-lor-api.txt").toString().split("\n").splice(1);

    championsAPI.count = results.length

    for (i = 0; i < championsAPI.count; i++) {
        championsAPI.result.push(new Champion(...results[i].split("\t")));
    }

    console.log("Connected to http://localhost:3000");
});
