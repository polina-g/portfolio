import React from 'react';
import { Link } from 'gatsby';
import { nav, link, menuContainer } from './burger.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Header = () => {
    return (
        <header>
            <nav className={nav}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button {...bindTrigger(popupState)} >
                            <StaticImage alt="avatar outline" src="../../static/portfolio-avatar.png" width={60}/>
                        </Button>
                        <Menu {...bindMenu(popupState)} className={menuContainer}>
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link} 
                                    to="/">Home
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/about">About
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/portfolio">Portfolio
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/resume">Resume
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/contact">Contact Me
                                </Link>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            </nav>
        </header>
    );
};

export default Header;