import React from 'react';
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
import Slide from '@mui/material/Slide';
import {contactButtons, formContainer} from './contact.module.scss'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Typography variant="h2" color="secondary">CONTACT ME</Typography>
                <Slide direction="right" in="true">
                    <div>    
                        <Box 
                            sx={{width: '90%', mt:5, ml:'5%'}}
                            justifyContent='center'
                            alignItems='center'
                        >   
                            <Paper elevation={5} sx={{width: '100%', p: '1rem', display:'flex'}}>
                                <form 
                                    name="contact-me" 
                                    method="POST"
                                    data-netlify="true" 
                                    data-netlify-honeypot="bot-field" 
                                    className={formContainer}>
                                    <input type="hidden" name="form-name" value="contact-me" />
                                    <FormControl fullWidth>
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
                                        name='full_name'
                                        required
                                        helperText="Please enter your full name"
                                        />

                                        <TextField
                                        type='email'
                                        label='E-mail'
                                        name='email'
                                        autoComplete='off'
                                        margin='normal'
                                        fullWidth
                                        required
                                        sx={{mb: 3}}
                                        helperText="Please enter your email"
                                        />

                                        <TextField
                                        type='text'
                                        label='Subject'
                                        name='subject'
                                        autoComplete='off'
                                        margin='normal'
                                        fullWidth
                                        sx={{mb: 3}}
                                        helperText="Please enter a subject"
                                        />

                                        <TextField
                                        label="Message"
                                        name="message"
                                        multiline
                                        minRows={10}
                                        required
                                        />
                                        <Button 
                                            type='submit' 
                                            variant='contained' 
                                            sx={{mt: '1rem', width:'20%'}}
                                        >
                                            Send Email
                                        </Button>
                                    </FormControl>
                                </form>
                                <div className={contactButtons}>
                                    <Typography variant="h4" color="primary">Find Me On Social Media</Typography>
                                    <Button variant="outlined" startIcon={<GitHubIcon />} size="large">
                                        <a href="https://github.com/polina-g" target="_blank" rel="noreferrer">GITHUB</a>
                                    </Button>
                                    <Button variant="outlined" startIcon={<LinkedInIcon />} size="large">
                                        <a href="https://www.linkedin.com/in/polina-g/" target="_blank" rel="noreferrer">LINKEDIN</a>
                                    </Button>
                                    <Button variant="outlined" startIcon={<TwitterIcon />} size="large">
                                        <a href="https://twitter.com/ThisIsPolinaG" target="_blank" rel="noreferrer">TWITTER</a>
                                    </Button>
                                </div>
                            </Paper>    
                        </Box>
                    </div>
                </Slide>
            </Layout>
        </div>
    );
};

export default ContactPage;