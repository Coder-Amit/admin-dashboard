import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { PieChart } from '../../components/PieChart'

function ChartPieChart() {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subTitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default ChartPieChart