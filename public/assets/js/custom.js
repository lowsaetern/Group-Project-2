const rent = document.querySelector('.rent-input');
const food = document.querySelector('.food-input');
const transportation = document.querySelector('.transportation-input');
const ulitlities = document.querySelector('.utilities-input');

const ctx = document.getElementById('mychart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Rent', 'Food', 'Transportation', 'Ulitlities'],
		datasets: [
			{
				label: '# of Votes',
				data: [0, 0, 0, 0],
				backgroundColor: ['#ffc107', '#0dcaf0', '#dc3545', '#0d6efd'],
				hoverOffset: 4,
				borderWidth: 1,
			},
		],
	},
});

const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', (e) => {
		myChart.data.datasets[0].data[dataOrder] = e.target.value;
		myChart.update();
	});
};

updateChartValue(rent, 0);
updateChartValue(food, 1);
updateChartValue(transportation, 2);
updateChartValue(ulitlities, 3);
