import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import {indexContainer, contactButtons, introContainer} from './index.module.scss'
import useMediaQuery from '../utils/useMediaQuery';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Paper from '@mui/material/Paper';
import { textAlign } from '@mui/system';

const HomePage = () => {
  const isQuery = useMediaQuery('(max-width: 1150px)');
  const [slideOne, setSlideOne] = useState(false)
  const [slideTwo, setSlideTwo] = useState(false)
  const [slideThree, setSlideThree] = useState(false)
  const [fadeButtonOne, setFadeButtonOne] = useState(false)
  const [fadeButtonTwo, setFadeButtonTwo] = useState(false)
  const [fadeButtonThree, setFadeButtonThree] = useState(false)
  console.log(isQuery);

  const handleSlide = () => {
    let timeout = 500
    setTimeout(() => {
      setSlideOne(true)
      setSlideTwo(true)
    }, timeout);

    setTimeout(() => {
      setSlideThree(true)
    }, timeout + 500);

    setTimeout(() => {
      setFadeButtonOne(true)
    }, timeout + 1500);

    setTimeout(() => {
      setFadeButtonTwo(true)
    }, timeout + 2000);

    setTimeout(() => {
      setFadeButtonThree(true)
    }, timeout + 2500);
  }

  useEffect(() => {
    handleSlide();
  }, [isQuery])

 const desktop = () => {
  return (
    <div>
      <Layout>
        <div className={indexContainer}>
          <div className={introContainer}>
            <Slide direction="right" in={slideOne}>
              <Typography variant="h1" color="secondary" sx={{ml: "5%"}}>
                Hey there!
              </Typography>
            </Slide>
            <Slide direction="up" in={slideTwo}>
              <Typography variant="h2" color="primary">
                My name is Polina
              </Typography>
            </Slide>
            <Slide direction="up" in={slideThree}>
              <Typography variant="h3" color="primary" sx={{mt: "10px"}}>
                I am a Software Developer.
              </Typography>
            </Slide>
          </div>

          <div className={contactButtons}>
            <Fade in={fadeButtonOne}>
              <Button variant="outlined" startIcon={<GitHubIcon />} size="large">
                  <a href="https://github.com/polina-g" target="_blank" rel="noreferrer">GITHUB</a>
              </Button>
            </Fade>
            <Fade in={fadeButtonTwo}>
              <Button variant="outlined" startIcon={<LinkedInIcon />} size="large">
                  <a href="https://www.linkedin.com/in/polina-g/" target="_blank" rel="noreferrer">LINKEDIN</a>
              </Button>
            </Fade>
            <Fade in={fadeButtonThree}>
              <Button variant="outlined" startIcon={<TwitterIcon />} size="large">
                  <a href="https://twitter.com/ThisIsPolinaG" target="_blank" rel="noreferrer">TWITTER</a>
              </Button>
            </Fade>
          </div>
        </div>
      </Layout>
    </div>
  );
 }

const mobile = () => {
  return (
    <div>
      <Layout>
        <Paper elevation={3} sx={{pt: '20px', pb: '15px', opacity:'0.9'}}>
          <div className={indexContainer}>
            <div className={introContainer}>
              <Slide direction="right" in={slideOne}>
                <Typography variant="h1" color="secondary" sx={{ml: "5%"}}>
                  Hey there!
                </Typography>
              </Slide>
              <Slide direction="up" in={slideTwo}>
                <Typography variant="h2" color="primary">
                My name is Polina
                </Typography>
              </Slide>
              <Slide direction="up" in={slideThree}>
                <Typography variant="h3" color="primary" sx={{mt: "10px"}}>
                I am a Software Developer.
                </Typography>
              </Slide>
            </div>

          <div className={contactButtons}>
            <Fade in={fadeButtonOne}>
              <Button variant="outlined" size="sm">
                <a href="https://github.com/polina-g" target="_blank" rel="noreferrer"><GitHubIcon sx={{fontSize:'38px'}}/></a>
              </Button>
            </Fade>
            <Fade in={fadeButtonTwo}>
              <Button variant="outlined" size="large">
                <a href="https://www.linkedin.com/in/polina-g/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{fontSize:'38px'}}/></a>
              </Button>
            </Fade>
            <Fade in={fadeButtonThree}>
              <Button variant="outlined" size="large">
                <a href="https://twitter.com/ThisIsPolinaG" target="_blank" rel="noreferrer"><TwitterIcon sx={{fontSize:'38px'}}/></a>
              </Button>
            </Fade>
          </div>
        </div>
      </Paper>
    </Layout>
  </div>
)}
  
  return(
  
        isQuery ? mobile() : desktop()
      
  );
};

export default HomePage;