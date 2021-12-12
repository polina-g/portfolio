import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import {aboutMeContainer, image} from './about.module.scss';

const AboutPage = ({data}) => {
    const [paragraphVisibility, setParagraphVisibility] = useState(false);

    const handleParagraph = () => {
        setParagraphVisibility((prev) => !prev);
    }

    return(
        <div>
            <Layout>
            <Typography variant="h2" color="secondary" sx={{ml: "5%"}}>ABOUT ME</Typography>
            <Slide direction="right" in="true">
            <div>
                <Box 
                    sx={{width: '90%', mt:5, ml:'5%'}}
                    justifyContent='center'
                    alignItems='center'
                >   
                    <Paper elevation={5} sx={{width: '100%', p: '1rem'}}>
                        <div className={aboutMeContainer}>
                            <div className={image}>
                                <StaticImage alt="photo of Polina by the ocean smiling at the camera" src="../../static/pg_photo.png" />
                            </div>
                            <div>
                                <p>
                                    <Typography variant="body1" color="primary" sx={{fontSize:'20px'}}>
                                        Hello, my name is Polina. I am a clinical psychologist turned software engineer who loves to learn and has a strong passion for coding, problem solving and helping create bigger and better things. My decision to change careers has been the most challenging, but also one of the most rewarding thus far. <b>I take the empathy, ability to listen to others and willingness to always learn with me as I transition from psychology into the tech industry.</b> Coding gives me new languages and tools to positively impact those around me and I am excited to continue building meaningful solutions to complex problems. I believe in working hard at achieving your goals and I aspire to never stop learning, growing and being better tomorrow than I am today.
                                    </Typography>
                                </p>
                                {paragraphVisibility ? 
                                    <div>
                                        <Typography variant="body1" color="primary" sx={{fontSize:'20px'}}>
                                        Interestingly, I first fell in love with programming back when I was in eight grade while learning C and C++. Unfortunately, after spending two weeks of spring vacation building a small version of “paint” using OOP and classes in C++ for the programming class I was taking, my teacher accused me of cheating, suspecting that the program was build by my father (a software developer) and almost failed me. This experience turned me away from computer science and I ended up taking a different path, graduating with a master’s degree in clinical psychology. <b>Many years later I finally found my way back to my passion - coding!</b> I graduated from the Software Engineering Immersive program at General Assembly, where I developed skills in Javascript with Node.js, React, SQL and noSQL databases, Python, Django and many other technical skills that allowed me to build four projects over the course of the twelve-week full-time program. My path to software engineering gives me a unique set of skills and competencies: on top of the tech stack below, I am also very open-minded, able to listen to others, responsible and take pride in everything that I do. 
                                            <Typography variant="h5" sx={{mt: "25px", mb:"15px"}}>
                                                <b>It's time for my next adventure, and I am truly unbelievably excited to be on this journey!</b>
                                            </Typography>
                                        </Typography>
                                    </div> : <Divider />
                                }

                                {paragraphVisibility ? <Divider /> : <></>}
                                <Button type="button" onClick={handleParagraph} color="secondary" sx={{fontSize:"20px", mt:"10px"}}>
                                    {paragraphVisibility ? 'Hide Text' : 'Click Here to read more'}
                                </Button>
                                    

                                <div>
                                    <p><Typography variant="h4" color="secondary">My skills:</Typography></p>
                                    <div>
                                        <MDXRenderer>
                                            {data.mdx.body}
                                        </MDXRenderer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Box>
            </div>
            </Slide>
            </Layout>
        </div>
    );
};

export const query = graphql`
query {
    mdx {
      body
    }
  }
  
  
`

export default AboutPage;