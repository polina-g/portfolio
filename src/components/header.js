import React from 'react';
import { Link } from 'gatsby';
import { nav, activeLink, link } from './header.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
    return (
        <header>
            <nav className = {nav}>
                <ul>
                    <li>
                        <Link 
                            className={link}
                            activeClassName={activeLink} to="/about">About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={link}
                            activeClassName={activeLink} to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link 
                            className={link} 
                            activeClassName={activeLink} to="/"><StaticImage alt="avatar outline" src="../../static/portfolio-avatar.png" width={60}/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={link}
                            activeClassName={activeLink} to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link 
                            className={link}
                            activeClassName={activeLink} to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;