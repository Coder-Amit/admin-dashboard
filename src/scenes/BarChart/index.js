import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import BarChart from '../../components/BarChart'

function ChartBarChart() {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subTitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default ChartBarChart