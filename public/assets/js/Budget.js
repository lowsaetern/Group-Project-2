const displayArea = document.querySelector('#display-area');
const selectionArea = document.getElementById('#selection-area');

//BUDGET OBJ
const formData = {
	name: '',
	income: '',
};

//cities   (C=city - R=radio-box #=number of radio box)
var LA = document.getElementById('C-R1');
var San_D = document.getElementById('C-R2');
var Sac = document.getElementById('C-R3');
var San_J = document.getElementById('C-R4');
var San_F = document.getElementById('C-R5');

//income ranges   (IR=Income Range - R=radio-box #=number of radio box)
var ir_1 = document.getElementById('IR-R1');
var ir_2 = document.getElementById('IR-R2');
var ir_3 = document.getElementById('IR-R3');
var ir_4 = document.getElementById('IR-R4');
var ir_5 = document.getElementById('IR-R5');

//this checks what radio button (city) was selected
var city = function () {
	if (LA.checked) {
		//LA IS SELECTED
		formData.name = 'LosAngeles';
	} else if (San_D.checked) {
		//SAN DIEGO IS SELECTED
		formData.name = 'SanDiego';
	} else if (Sac.checked) {
		//SACRAMENTO IS SELECTED
		formData.name = 'Sacramento';
	} else if (San_J.checked) {
		//SAN JOSE IS SELECTED
		formData.name = 'SanJose';
	} else if (San_F.checked) {
		//SAN FRANCISCO IS SELECTED
		formData.name = 'SanFrancisco';
	}
	//getBudgets(formData);
	console.log(formData);
};

//this checks what radio button (income range) was selected
var incomeRange = function () {
	if (ir_1.checked) {
		//BUDGET BETWEEN:$ 60,000 - 70,000 WAS SELECTED
		formData.income = '60000';
	} else if (ir_2.checked) {
		//BUDGET BETWEEN:$ 70,000 - 80,000 WAS SELECTED
		formData.income = '70000';
	} else if (ir_3.checked) {
		//BUDGET BETWEEN:$ 80,000 - 90,000 WAS SELECTED
		formData.income = '80000';
	} else if (ir_4.checked) {
		//BUDGET BETWEEN:$ 90,000 - 100,000 WAS SELECTED
		formData.income = '90000';
	} else if (ir_5.checked) {
		//BUDGET BETWEEN:$ 100,000 - 150,000 WAS SELECTED
		formData.income = '100000';
	}
	getBudgets(formData);
	console.log(formData);
};

const printResults = (resultArr) => {
	console.log(resultArr);

	const budgetHTML = resultArr.map(
		({ id, name, income, food, rent, transportation, utilities }) => {
			return `
  <div class="col-md-6 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${name}</h4>
      <p>
      income: $ ${income}+<br/>
      Food: $ ${food}<br/>
      Rent: $ ${rent}<br/>
      Transportation: $ ${transportation}<br/>
      Utilities: $ ${utilities}<br/>
      </p>
    </div>
  </div>
    `;
		}
	);

	displayArea.innerHTML = budgetHTML.join('');
};

const getBudgets = (formData = {}) => {
	let queryUrl = '/api/budgets?';

	Object.entries(formData).forEach(([key, value]) => {
		queryUrl += `${key}=${value}&`;
	});

	console.log(queryUrl);
	fetch(queryUrl)
		.then((response) => {
			if (!response.ok) {
				return alert('Error: ' + response.statusText);
			}
			return response.json();
		})
		.then((budgetData) => {
			console.log(budgetData);
			printResults(budgetData);
		});
};
//event listeners
document.getElementById('city').addEventListener('click', city);
document.getElementById('income-Range').addEventListener('click', incomeRange);
