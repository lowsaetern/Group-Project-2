const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const { budgets } = require('./data/budgets.json');

app.use(express.static(__dirname + '/public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//handlebars setting

app.engine(
	'handlebars',
	exphbs.engine({
		extname: 'hbs',
		defaultLayout: 'index',
	})
);

app.set('view engine', 'hbs');

app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
console.log(`listening to server: http://localhost:${PORT}`);

function filterByQuery(query, budgetsArray) {
	let filteredResults = budgetsArray;
	if (query.name) {
		filteredResults = filteredResults.filter(
			(budget) => budget.name === query.name
		);
	}
	if (query.income) {
		filteredResults = filteredResults.filter(
			(budget) => budget.income === query.income
		);
	}
	if (query.id) {
		filteredResults = filteredResults.filter(
			(budget) => budget.id === query.id
		);
	}
	return filteredResults;
}

function findById(id, budgetsArray) {
	const result = budgetsArray.filter((budget) => budget.id === id)[0];
	return result;
}

function createNewBudget(body, budgetsArray) {
	const budget = body;
	budgetsArray.push(budget);
	fs.writeFileSync(
		path.join(__dirname, './data/budgets.json'),
		JSON.stringify({ budgets: budgetsArray }, null, 2)
	);
	return budget;
}

function validateBudget(budget) {
	if (!budget.name || typeof budget.name !== 'string') {
		return false;
	}
	if (!budget.rent || typeof budget.rent !== 'string') {
		return false;
	}
	if (!budget.transportation || typeof budget.transportation !== 'string') {
		return false;
	}
	if (!budget.food || typeof budget.food !== 'string') {
		return false;
	}
	if (!budget.utilities || typeof budget.utilities !== 'string') {
		return false;
	}
	return true;
}

//landing page
app.get('/', (req, res) => {
	res.render('main');
});

app.get('/custom', (req, res) => {
	res.sendFile(path.join(__dirname, './public/custom.html'));
});

app.get('/api/budgets', (req, res) => {
	let results = budgets;
	if (req.query) {
		results = filterByQuery(req.query, results);
	}
	res.json(results);
});

app.get('/api/budgets/:id', (req, res) => {
	const result = findById(req.params.id, budgets);
	if (result) {
		res.json(result);
	} else {
		res.send(404);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/budgets', (req, res) => {
	// set id based on what the next index of the array will be
	req.body.id = budgets.length.toString();
	// if any data in req.body is incorrect, send 400 error back
	if (!validateBudget(req.body)) {
		res.status(400).send('The budget is not properly formatted.');
	} else {
		// add budget to json file and budget array in this function
		const budget = createNewBudget(req.body, budgets);

		res.json(budget);
	}
});
