const express = require('express')();
const app = express();
const port = 8080;
const id = 'LA, SD, SF, SAC, SJ';

app.get('/city/budget/:id/:min/:max', (req, res) => {
	const { id, min, max } = req.params;
	const { logo } = res.body;

	if (!logo) {
		res.status(418).send({ message: 'Please choose another option' });
	}

	res.send({
		general_budget: 'Here is your expected salary ... ',
	});
});

function grabCitybudgets() {
	fetch('http://examples.com/movies.json')
		.then((response) => response.json())
		.then((data) => console.log(data));
}
