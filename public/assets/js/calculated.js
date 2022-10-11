const cases = document.querySelector('.coronavirus-input');
const deaths = document.querySelector('.deaths-input');
const recovered = document.querySelector('.recovered-input');

const ctx = document.getElementById('mychart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Rent', 'Transportation', 'Food', 'Ulitlities'],
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

updateChartValue(cases, 0);
updateChartValue(deaths, 1);
updateChartValue(recovered, 2);
