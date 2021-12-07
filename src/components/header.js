import React from 'react';
import { Link } from 'gatsby';
import { nav, activeLink } from './header.module.scss';

const Header = () => {
    return (
        <header>
            <nav className = {nav}>
                <ul>
                    <li>
                        <Link activeClassName={activeLink} to="/">Home</Link>
                    </li>
                    <li>
                        <Link activeClassName={activeLink} to="/about">About</Link>
                    </li>
                    <li>
                        <Link activeClassName={activeLink} to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link activeClassName={activeLink} to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link activeClassName={activeLink} to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;