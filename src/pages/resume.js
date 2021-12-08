import React, {useState} from 'react';
import Layout from '../components/layout';

const ResumePage = () => {
    return (
        <div>
            <Layout>
                <h1>My Resume</h1>
                <iframe src="https://drive.google.com/file/d/1NRRk0_a1eF4gDwdWrjzGwW_18l30hr6v/preview" width="800" height="480" allow="autoplay"></iframe>
            </Layout>
        </div>
    );
};



export default ResumePage;