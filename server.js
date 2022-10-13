const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const { budgets } = require('./data/budgets.json');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

//landing page
app.get('/', (req, res) => {
	res.render('main');
});

app.get('/api/budgets', (req, res) => {
	let results = budgets;
	if (req.query) {
		results = filterByQuery(req.query, results);
	}
	res.json(results);
});
