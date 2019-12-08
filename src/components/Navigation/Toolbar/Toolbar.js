import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import HamburgerMenu from '../SideDrawer/HamburgerMenu/HamburgerMenu';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
        <header className={styles.Toolbar}>
            <HamburgerMenu 
                clicked={props.menuClicked}
                mobileView={props.menuNotDisplayed}
                sideDrawer={props.sideDrawer}/>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
);

export default toolbar;