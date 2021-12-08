import React, {useState} from 'react';
import Layout from '../components/layout';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import * as resume from '../../resume/Polina G Resume 2021.pdf'

const ResumePage = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        <div>
            <Layout>
                <h1>My Resume</h1>
                <Document file="../../resume/Polina-G-Resume-2021.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </Layout>
        </div>
    );
};

export default ResumePage;