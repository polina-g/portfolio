import React from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import {layoutContainer} from './layout.module.scss'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = ({ children }) => {
    const theme = createTheme({
        palette: {
            background: {
                paper: 'rgba(255, 255, 255, 0.9)',
                default: '#f6f6f6',
            }
        }
      });

    return (
        <ThemeProvider theme={theme}>
            <div className={layoutContainer}>
                <Header />
                    <main>
                        {children}
                    </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout