import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {actionButtons} from './portfolio.module.scss'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

const PortfolioPage = ({data}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
      <div>
          <Layout>
          <h1>My Portfolio Page</h1>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                  <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    centered
                    orientation="vertical" 
                  >
                    <Tab label="BOTW Compendium"/>
                    <Tab label="Puzzled"/>
                    <Tab label="Untangle"/>
                    <Tab label="Tech Talk"/>
                  </Tabs>
                </Grid>
                <Grid item xs={8} md={10}>
                  {
                data.allProjectsJson.nodes.map((node, idx) => (
                  <Paper>
                    <TabPanel key={node.id} value={value} index={idx}>
                      <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                          <GatsbyImage image={getImage(node.image)} alt="text"/>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <div className={actionButtons}>
                            <Button variant="outlined"><a href={node.code} target="_blank">Glance at the Code</a></Button>
                            <Button variant="outlined"><a href={node.link} target="_blank">Visit website</a></Button>
                          </div>
                          <h1>{node.title}</h1>
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