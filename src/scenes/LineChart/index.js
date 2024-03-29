import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'

function ChartLineChart() {
    return (
        <Box m="20px">
            <Header title="Line Chart" subTitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default ChartLineChart