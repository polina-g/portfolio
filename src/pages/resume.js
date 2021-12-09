import React from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import {resumeContainer} from './resume.module.scss'

const ResumePage = () => {
    return (
        <div>
            <Layout>
                <Typography variant="h2">RESUME</Typography>
                <div className={resumeContainer}>
                    <iframe src="https://drive.google.com/file/d/1NRRk0_a1eF4gDwdWrjzGwW_18l30hr6v/preview" width="900" height="480" allow="autoplay"></iframe>
                </div>
            </Layout>
        </div>
    );
};



export default ResumePage;