import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import { tokens } from "../../theme";


import React from 'react'

function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [currentEvents, setCurretnEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEvenClick = (selected) => {
        if (window.confirm("Delete This Event  " + selected.event.title)) {
            selected.event.remove();
        }
    }

    return (
        <Box
            m="20px"
        >
            <Header title="CALENDAR" subTitle="Full calender interactive type" />
            <Box display="flex" justifyContent="spaace-between">
                {/* Calender Sidebar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px" >
                    <Typography variant="h6">Events</Typography>
                    <List>
                        {currentEvents?.map((event) => {
                            return <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        })}

                    </List>
                </Box>

                {/* Calender Component */}
                <Box flex="1 1 100%" ml="15px" >
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin

                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEvenClick}
                        eventsSet={(events) => setCurretnEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "ALL day Event", date: "2023-03-15" },
                            { id: "1235", title: "Timed Event", date: "2023-03-14" },
                        ]}
                    />
                </Box>
            </Box>


        </Box>
    )
}

export default Calendar