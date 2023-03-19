import react from "react"
import { Box, useTheme, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header'
import { tokens } from "../../theme";

function Faq() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const faqsList = [
        { ques: " This is the question", ans: "This is the answer" },
        { ques: " This is the question", ans: "This is the answer" },
        { ques: " This is the question", ans: "This is the answer" }
    ]

    return (
        <Box m="20px" >
            <Header title="FAQs" subTitle="Frequently asked questions" />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography color={colors.greenAccent[500]} variant="h6" >Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer for important questions
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </Box>
    )
}

export default Faq