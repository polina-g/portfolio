import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {contactButtons} from './contact.module.scss'

const ContactPage = () => {
    const [formState, setFormState] = useState({
        full_name: '',
        email: '',
        message: '',
    });

    const handleChange = event => {
        setFormState(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      };

      const handleSumbit = event => {
        event.preventDefault();
        setFormState({
            full_name: '',
            email: '',
            message: '',
        });
      };

    return (
        <div>
            <Layout>
                <Typography variant="h2">CONTACT ME</Typography>
                <Box 
                    sx={{width: '90%', mt:5, ml:'5%'}}
                    justifyContent='center'
                    alignItems='center'
                >   
                    <Paper elevation={5} sx={{width: '100%', p: '1rem', display:'flex'}}>
                        <FormControl sx={{width: '60%', ml:'10px'}}>
                            <Typography
                                variant='h3'
                                color='primary'
                                fontWeight='light'
                                sx={{mt: 3, mb: 3}}
                            >
                            Email Me
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
                            name="message"
                            multiline
                            minRows={10}
                            value={formState.message}
                            onChange={handleChange}
                            />
                            <Button 
                                type='submit' 
                                variant='contained' 
                                sx={{mt: '1rem', width:'20%'}}
                            >
                                Send Email
                            </Button>
                        </FormControl>
                        <div className={contactButtons}>
                            <Typography variant="h4">Find me on Social Media</Typography>
                            <Button variant="outlined" startIcon={<GitHubIcon />} size="large">
                                GITHUB
                            </Button>
                            <Button variant="outlined" startIcon={<LinkedInIcon />} size="large">
                                LINKEDIN
                            </Button>
                            <Button variant="outlined" startIcon={<TwitterIcon />} size="large">
                                TWITTER
                            </Button>
                        </div>
                    </Paper>    
                </Box>
            </Layout>
        </div>
    );
};

export default ContactPage;