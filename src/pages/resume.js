import React from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import {resumeContainer, resumeButton, actionButtons} from './resume.module.scss'
import { Button } from '@mui/material';
import resume from '../../static/Polina G Resume 2021.pdf';

const ResumePage = () => {
    return (
        <div>
            <Layout>
                <Typography variant="h2">RESUME</Typography>
                <div className={resumeContainer}>
                    <div className={actionButtons}>
                        <Button variant="contained" className={resumeButton} size="large" color="secondary"><a href={resume} target="_blank" >View Separately</a></Button>
                        <Button variant="contained" className={resumeButton} size="large" color="secondary"><a href={resume} download>Download</a></Button>
                    </div>
                    <iframe src={resume} width="85%" height="480"></iframe>
                </div>
            </Layout>
        </div>
    );
};



export default ResumePage;