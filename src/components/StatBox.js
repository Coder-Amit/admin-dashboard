import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import React from 'react'


const StatBox = ({ title, subTitle, icon, progress, increase }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box width="100%" m="0 30px"  >
            <Box display="flex" justifyContent="space-between" >
                <Box>
                    {icon}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ color: colors.gray[100] }}
                    >{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: colors.greenAccent[500] }}
                >{subTitle}</Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >{increase}</Typography>
            </Box>

        </Box>

    )
}

export default StatBox