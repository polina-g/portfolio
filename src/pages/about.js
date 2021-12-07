import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
    return(
        <div>
            <Header />
            <h1>About Page</h1>
            <p>My name is Polina. Here is my story</p>
            <p>Find me on <a href="https://www.github.com/polina-g" target="_blank">Github!</a></p>
            <Footer />
        </div>
    );
};

export default AboutPage;