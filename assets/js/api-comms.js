const express = require('express')();
const app = express();
const port = 8080;
const id = "LA, SD, SF, SAC, SJ";



app.get('/city/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = re.body;

    if (!logo) {
        res.status(418).send({ message: 'Please choose another option' })
    }

    res.send({
        general_budget: {"Here is your expected salary ... " + (function {
            TouchList: //Insert list information from 5 cities.
        })}
    })

});