import React from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import {layoutContainer} from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={layoutContainer}>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    );
};

export default Layout