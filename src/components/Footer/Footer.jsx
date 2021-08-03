import React, { Fragment } from 'react'

import Socials from '../../UI/Socials/Socials';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <Fragment>
            <div className={`row mt-5 ${classes.footer}`}>
                <div className="text-center">
                    <h2>Thanks for Visiting!</h2>
                </div>
                <div className="text-center">
                    <Socials />
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
