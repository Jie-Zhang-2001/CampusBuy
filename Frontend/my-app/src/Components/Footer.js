import React from 'react';
import classes from '../css/Footer.module.css';

const Footer = () => {
    return (
    <footer className={classes.footer} style={{backgroundColor:'black',color:'white'}}>
        <div>Built with React, React Bootstrap, and Node.js</div>
            <div>campusbuy.com @2021</div>
            <div>Trade within your campus!</div>
    </footer>
    );
}


export default Footer;