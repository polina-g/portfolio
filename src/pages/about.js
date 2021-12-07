import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return(
        <div>
            <Layout>
            <h1>About Page</h1>
            <p>My name is Polina. Here is my story</p>
            <p>Find me on <a href="https://www.github.com/polina-g" target="_blank">Github!</a></p>
            </Layout>
        </div>
    );
};

export default AboutPage;