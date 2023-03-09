import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { Link } from 'react-router-dom'
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlineIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlineIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlineIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlineIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlineIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            component={<Link to={to} />}
            icon={icon}
            active={selected === title}
            onClick={() => setSelected(title)}
            sty
        >
            <Typography>{title}</Typography>
        </MenuItem>
    )
}

function ProSidebar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

    return (
        <Box height="100%" sx={{
            "& .ps-sidebar-container": {
                background: `${colors.primary[400]} !important`
            },
            "& .ps-menu-button:hover": {
                backgroundColor: 'transparent !important',
                color: "#868dfb !important"
            },
            "& .ps-menu-button.active": {
                color: "#6870fa !important"
            },
        }}
        >
            <Sidebar style={{ height: '100%' }}
                rootStyles={{
                    border: "none"
                }}
            >
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: active ? "#6870fa" : undefined,
                                    backgroundColor: "transparent",
                                    height: '40px'
                                };
                        },
                    }}
                >
                    <Box>
                        {!collapsed ? (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                p=".5rem 2rem"
                            >
                                <Typography variant="h5" color={colors.gray[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => { collapseSidebar() }}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        ) :
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                p=".5rem 2rem"
                            >
                                <IconButton onClick={() => { collapseSidebar() }}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        }
                    </Box>
                    {!collapsed && (
                        <Box mb="1rem">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="56px"
                                    height="56px"
                                    src={`assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h6" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box paddingLeft={collapsed ? undefined : "10%"}>

                        <Item
                            title="Dashboard"
                            icon={<HomeOutlineIcon />}
                            to="/"
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Typography
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}

                        >Data</Typography>
                        <Item
                            title="Manage Team"
                            icon={<PeopleOutlineIcon />}
                            to="/team"
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item
                            title="Contact Information"
                            icon={<ContactsOutlineIcon />}
                            to="/contacts"
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item
                            title="Invoices Balances"
                            icon={<ReceiptOutlineIcon />}
                            to="/invoices"
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Typography
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}

                        >Page</Typography>
                        <Item
                            title="Add User"
                            icon={<PersonOutlineIcon />}
                            to="/adduser"
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default ProSidebar