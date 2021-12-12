import React from 'react';
import { Link } from 'gatsby';
import { menuIcon, link } from './burger.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Header = () => {
    return (
        <header className={menuIcon}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button {...bindTrigger(popupState)} >
                            <StaticImage alt="avatar outline" src="../../static/portfolio-avatar.png" width={60}/>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link} 
                                    to="/">Home
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/about">About
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/portfolio">Portfolio
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link 
                                    className={link}
                                    to="/resume">Resume
                                </Link>
                            </MenuItem>
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
        </header>
    );
};

export default Header;