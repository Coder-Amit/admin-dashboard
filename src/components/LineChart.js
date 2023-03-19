import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { mockLineData } from '../data/mockData';

function LineChart({ isDashboard = false }) {

    const [chartData, setChartData] = useState({
        labels: mockLineData[0].data.map((data) => data.x),
        datasets: [
            {
                label: "Japan",
                data: mockLineData[0].data.map((data) => data.y),
                backgroundColor: mockLineData[0].color,
                borderColor: mockLineData[0].color,
                borderWidth: 2,
            },
            {
                label: "France",
                data: mockLineData[1].data.map((data) => data.y),
                backgroundColor: mockLineData[1].color,
                borderColor: mockLineData[1].color,
                borderWidth: 2,
            },
            {
                label: "US",
                data: mockLineData[2].data.map((data) => data.y),
                backgroundColor: mockLineData[2].color,
                borderColor: mockLineData[2].color,
                borderWidth: 2,
            },
        ]
    });
    return (
        <div>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: isDashboard ? false : true,
                            text: "Traffic Details"
                        },
                        legend: {
                            display: isDashboard ? false : true
                        }
                    },
                }}

            />

        </div>
    )
}

export default LineChart