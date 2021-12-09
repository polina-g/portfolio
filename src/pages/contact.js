import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        full_name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormState(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      };

    return (
        <div>
            <Layout>
                <Typography variant="h2">CONTACT ME</Typography>
                <Box 
                    sx={{width: '70%', mt:5, ml:'15%'}}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Paper elevation={5} sx={{width: '100%', p: '1rem'}}>
                        <FormControl>
                            <Typography
                                variant='h3'
                                color='primary'
                                fontWeight='light'
                                sx={{mt: 3, mb: 3}}
                            >
                            Send me and e-mail 
                            </Typography>
                            <TextField
                            type='text'
                            label='Full Name'
                            autoComplete='off'
                            margin='normal'
                            onChange={handleChange}
                            value={formState.full_name}
                            name='full_name'
                            required
                            helperText="Please enter your full name"
                            />

                            <TextField
                            type='text'
                            label='E-mail'
                            name='email'
                            autoComplete='off'
                            margin='normal'
                            fullWidth
                            required
                            onChange={handleChange}
                            value={formState.email}
                            sx={{mb: 3}}
                            helperText="Please enter your email"
                            />

                            <TextField
                            label="Message"
                            multiline
                            maxRows={10}
                            value={formState.message}
                            onChange={handleChange}
                            />

                        </FormControl>
                    </Paper>    
                </Box>

            </Layout>
        </div>
    );
};

export default ContactPage;