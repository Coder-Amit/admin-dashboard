import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    Address1: "",
    Address2: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone no is not valid").required("required"),
    Address1: yup.string().required("required"),
    Address2: yup.string().required("required"),

})

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubbmit = (values) => {
        console.log(values);
    }

    return (
        <Box
            m="20px"
        >
            <Header />
            <Formik
                onSubmit={handleFormSubbmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                    return <form onSubmit={handleSubmit} >
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0,1fr)"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                error={!!touched.firstName && !!errors.firstName}
                                name="firstName"
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}

                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                error={!!touched.lastName && !!errors.lastName}
                                name="lastName"
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}

                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                error={!!touched.email && !!errors.email}
                                name="email"
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}

                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                error={!!touched.contact && !!errors.contact}
                                name="contact"
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}

                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Address1}
                                error={!!touched.Address1 && !!errors.Address1}
                                name="Address1"
                                helperText={touched.Address1 && errors.Address1}
                                sx={{ gridColumn: "span 4" }}

                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.Address2}
                                error={!!touched.Address2 && !!errors.Address2}
                                name="Address2"
                                helperText={touched.Address2 && errors.Address2}
                                sx={{ gridColumn: "span 4" }}

                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type='submit' color='secondary' variant='contained' >Create user</Button>
                        </Box>
                    </form>
                }}
            </Formik>
        </Box>
    )
}

export default Form