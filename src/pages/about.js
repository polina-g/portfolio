import React from 'react';
import Layout from '../components/layout';
import { Typography } from '@mui/material';

const AboutPage = () => {
    return(
        <div>
            <Layout>
            <Typography variant="h2">ABOUT ME</Typography>
            <p>Find me on <a href="https://www.github.com/polina-g" target="_blank">Github!</a></p>
            </Layout>
        </div>
    );
};

export default AboutPage;