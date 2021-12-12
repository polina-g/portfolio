import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AboutPage = ({data}) => {
    const [paragraphVisibility, setParagraphVisibility] = useState(false);

    const handleParagraph = () => {
        setParagraphVisibility((prev) => !prev);
    }

    return(
        <div>
            <Layout>
            <Typography variant="h2" color="secondary">ABOUT ME</Typography>
            <div>
                <p>Hello, my name is Polina. I am a clinical psychologist turned software engineer who loves to learn and has a strong passion for coding, problem solving and helping create bigger and better things. My decision to change careers has been the most challenging, but also one of the most rewarding thus far. I take the empathy, ability to listen to others and willingness to always learn with me as I transition from psychology into the tech industry. Coding gives me new languages and tools to positively impact those around me and I am excited to continue building meaningful solutions to complex problems. I believe in working hard at achieving your goals and I aspire to never stop learning, growing and being better tomorrow than I am today.
                </p>
                <div>
                    <p>My skills:</p>
                    <div>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </div>
                    <Button type="button" onClick={handleParagraph}>
                        {paragraphVisibility ? 'Hide Text' : 'Click Here'}
                    </Button> {paragraphVisibility ? '' : 'to read more about my story!'}
                    {paragraphVisibility ? 
                    <div>
                        Interestingly, I first fell in love with programming back when I was in eight grade while learning C and C++. Unfortunately, after spending two weeks of spring vacation building a small version of “paint” using OOP and classes in C++ for the programming class I was taking, my teacher accused me of cheating, suspecting that the program was build by my father (a software developer) and almost failed me. This experience turned me away from computer science and I ended up taking a different path, graduating with a master’s degree in clinical psychology. Many years later I finally found my way back to my passion! I graduated from the Software Engineering Immersive program at General Assembly, where I developed skills in Javascript with Node.js, React, SQL and noSQL databases, Python, Django and many other technical skills that allowed me to build four projects over the course of the twelve-week full-time program. I believe my path to software engineering gives me a unique set of skills and competencies: I am open-minded, accountable and take pride in everything that I do. 

                        It's time for my next adventure, and I am truly unbelievably excited to be here!
                    </div> : <></>
                    }
                </div>
            </div>
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