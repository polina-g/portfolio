import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const PortfolioPage = ({data}) => {
    return (
        <div>
            <Layout>
            <h1>My Portfolio Page</h1>
            {
                data.allProjectsJson.nodes.map(node => (
                    <div key={node.id}>
                        <h2>{node.title}</h2>
                        <p>{node.technologies.join(', ')}</p>
                        <p>{node.description}</p>
                        <a href={node.code} target="_blank">Glance at the Code</a>
                        <a href={node.link} target="_blank">Visit website</a>
                    </div>
                ))
            }
            </Layout>
        </div>
    );
};

export const query = graphql`
query {
    allProjectsJson {
      nodes {
        code
        descripion
        link
        technologies
        title
      }
    }
  }
`;

export default PortfolioPage;