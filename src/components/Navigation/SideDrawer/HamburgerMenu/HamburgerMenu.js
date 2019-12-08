import React from 'react';
import styles from './HamburgerMenu.module.css';

const hamburgerMenu = (props) => (

    <div 
        className={styles.HamburgerMenu} 
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default hamburgerMenu;