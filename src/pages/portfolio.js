import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {actionButtons} from './portfolio.module.scss'
import useMediaQuery from '../utils/useMediaQuery';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Slide } from '@mui/material';

const PortfolioPage = ({data}) => {
  const [value, setValue] = useState(0);
  const isQuery = useMediaQuery('(max-width: 770px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
      <div>
          <Layout>
          <Typography variant="h2" color="secondary" sx={{ml: "5%"}}>PORTFOLIO</Typography>
          <Slide direction="right" in="true">
            <Box sx={{ width: '90%', marginLeft: '5%', marginTop: '40px'}} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2}>
                    <Tabs 
                      value={value} 
                      onChange={handleChange} 
                      orientation={isQuery ? 'horizontal' : 'vertical'}
                      variant={isQuery ? 'scrollable' : ''}
                      scrollButtons={isQuery ? 'auto' : ''} 
                      allowScrollButtonsMobile
                    >
                      <Tab label="BOTW Compendium"/>
                      <Tab label="Puzzled"/>
                      <Tab label="Untangle"/>
                      <Tab label="Tech Talk"/>
                    </Tabs>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    {
                  data.allProjectsJson.nodes.map((node, idx) => (
                    <Paper>
                      <TabPanel key={node.id} value={value} index={idx}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <GatsbyImage image={getImage(node.image)} alt="text"/>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <div className={actionButtons}>
                              <Button variant="outlined"><a href={node.code} target="_blank">Glance at the Code</a></Button>
                              <Button variant="outlined"><a href={node.link} target="_blank">Visit website</a></Button>
                            </div>
                            <Typography variant={isQuery ? "h4" : "h3"}>{node.title}</Typography>
                            <p><b>Technologies:</b> {node.technologies.join(', ')}</p>
                            <p><b>Brief Description:</b> {node.description}</p>
                            {/* 
                            */}
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </Paper>
                    ))
                  }
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Slide>
          </Layout>
      </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-id-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const query = graphql`
query {
    allProjectsJson {
      nodes {
        code
        description
        title
        technologies
        link
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PortfolioPage;