import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import React from "react";
import { Pie } from "react-chartjs-2";
import { mockPieData } from "../data/mockData"

Chart.register(CategoryScale);

export function PieChart({ isDashboard = false }) {
    const [chartData, setChartData] = useState({
        labels: mockPieData.map((label) => label.label),
        datasets: [
            {
                label: "Users Gained",
                data: mockPieData.map((data) => data.value),
                backgroundColor: mockPieData.map((color) => color.color),
                borderColor: "black",
                borderWidth: 0,
            }
        ]
    });

    return (
        <Pie
            data={chartData}
            options={{
                maintainAspectRatio: !isDashboard,
                plugins: {
                    title: {
                        display: isDashboard ? false : true,
                        text: "Languages per User"
                    },
                    legend: {
                        display: isDashboard ? false : true
                    }
                },
            }}
        />
    );
}
