import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { mockBarData } from '../data/mockData';


Chart.register(CategoryScale);

const BarChart = ({ isDashboard = false }) => {

    const [chartData, setChartData] = useState({
        labels: mockBarData.map((data) => data.country),
        datasets: [
            {
                label: "Burger",
                data: mockBarData.map((data) => data.burger),
                backgroundColor: mockBarData.map((data) => data.burgerColor),
                borderColor: "black",
                borderWidth: 0,
            },
            {
                label: "Hot Dog",
                data: mockBarData.map((data) => data["hot dog"]),
                backgroundColor: mockBarData.map((data) => data['hot dogColor']),
                borderColor: "black",
                borderWidth: 0
            },
            {
                label: "Kebab",
                data: mockBarData.map((data) => data.kebab),
                backgroundColor: mockBarData.map((data) => data.kebabColor),
                borderColor: "black",
                borderWidth: 0
            },
            {
                label: "Donut",
                data: mockBarData.map((data) => data.donut),
                backgroundColor: mockBarData.map((data) => data.donutColor),
                borderColor: "black",
                borderWidth: 0
            },
        ]
    });


    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: isDashboard ? false : true,
                            text: "Fast food consuption"
                        },
                        legend: {
                            display: isDashboard ? false : true
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,

                        },
                        y: {
                            stacked: true
                        },

                    },
                    maintainAspectRatio: true


                }}

            />

        </div>
    )
}

export default BarChart

