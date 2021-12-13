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

const HomePage = () => {
  const isQuery = useMediaQuery('(max-width: 380px)');
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
    )};

  const mobile = () => {
  return (
    <div>
      <Layout>
        <div className={indexContainer}>
          <div className={contactButtons}>
              <Fade in={fadeButtonOne}>
                <Button variant="outlined" size="small" startIcon={<GitHubIcon />}>
                    <a href="https://github.com/polina-g" target="_blank" rel="noreferrer">GITHUB</a>
                </Button>
              </Fade>
              <Fade in={fadeButtonTwo}>
                <Button variant="outlined" size="small" startIcon={<LinkedInIcon />}>
                    <a href="https://www.linkedin.com/in/polina-g/" target="_blank" rel="noreferrer">LINKEDIN</a>
                </Button>
              </Fade>
              <Fade in={fadeButtonThree}>
                <Button variant="outlined" size="small" startIcon={<TwitterIcon />}>
                    <a href="https://twitter.com/ThisIsPolinaG" target="_blank" rel="noreferrer">TWITTER</a>
                </Button>
              </Fade>
          </div>
          <div className={introContainer}>
            <Slide direction="right" in={slideOne}>
              <Typography variant="h3" color="secondary" sx={{ml: "5%", mt:"20px;"}}>
                Hey there!
              </Typography>
            </Slide>
            <Slide direction="up" in={slideTwo}>
              <Typography variant="h4" color="primary" sx={{mt:'10px'}}>
                My name is Polina
              </Typography>
            </Slide>
            <Slide direction="up" in={slideThree}>
              <Typography variant="h5" color="primary" sx={{mt: "10px"}}>
                I am a Software Developer.
              </Typography>
            </Slide>
          </div>
        </div>
      </Layout>
    </div>
    )}
  
  return(
  
        isQuery ? mobile() : desktop()
      
  );
};

export default HomePage;