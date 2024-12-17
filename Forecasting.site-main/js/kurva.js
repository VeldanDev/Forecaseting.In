const salesChartCtx = document.getElementById('salesChart').getContext('2d');
let salesChart;

function updateSalesChart() {
    const labels = foodData.map(data => data.name); // Menggunakan nama makanan sebagai label
    const movingAverages = foodData.map((data, index) => {
        const quantities = foodData.slice(0, index + 1).map(item => item.quantity);
        return calculateMovingAverage(quantities, 3);
    });

    if (salesChart) {
        salesChart.destroy(); // Hapus grafik lama sebelum membuat yang baru
    }

    salesChart = new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Single Moving Average',
                data: movingAverages,
                borderColor: '#1e90ff',
                backgroundColor: 'rgba(30, 144, 255, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Nama Makanan'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Single Moving Average'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
// Update grafik setelah data ditambahkan
updateSalesChart();
