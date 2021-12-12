import React from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import {resumeContainer, resumeButton, actionButtons} from './resume.module.scss'
import { Button } from '@mui/material';
import { Slide } from '@mui/material';
import resume from '../../static/Polina G Resume 2021.pdf';

const ResumePage = () => {
    return (
        <div>
            <Layout>
                <Typography variant="h2" color="secondary" sx={{ml: "5%"}}>RESUME</Typography>
                <Slide direction="right" in="true">
                <div className={resumeContainer}>
                    <div className={actionButtons}>
                        <Button variant="outlined" className={resumeButton} size="large"><a href={resume} target="_blank" rel="noreferrer">View Separately</a></Button>
                        <Button variant="outlined" className={resumeButton} size="large"><a href={resume} download>Download</a></Button>
                    </div>
                    <iframe src={resume} width="85%" height="480" title="resume"></iframe>
                </div>
                </Slide>
            </Layout>
        </div>
    );
};



export default ResumePage;