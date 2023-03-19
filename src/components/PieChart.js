import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { mockPieData } from '../data/mockData';


Chart.register(CategoryScale);


export function PieChart({ isDashboard = false }) {

    const data = {
        labels: mockPieData.map((label) => label.label),
        datasets: [{
            label: 'Programming',
            data: mockPieData.map((data) => data.value),
            backgroundColor: mockPieData.map((color) => color.color),
            hoverOffset: 4,
            borderWidth: 2,
        }]
    };

    return <Pie options={{
        plugins: {
            title: {
                display: isDashboard ? false : true,
                text: "Language Remarks"
            },
            legend: {
                display: isDashboard ? false : true
            }
        },
    }} data={data} />;
}
