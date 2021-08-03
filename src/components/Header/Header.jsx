import React, { Fragment } from 'react'

import classes from './Header.module.css'

import Socials from '../../UI/Socials/Socials'

const Header = () => {


    return (
        <Fragment>
            <div className={`row ${classes.header}`}>
                <span className={classes.socials}>
                    <Socials />
                </span>
                <h1>Oliver Erdmann</h1>
            </div>
            <div className={`row ${classes.subheaderCapsule}`}>
                <div className={classes.subheader}>
                    <h2 className="mt-4">Full Stack</h2>
                    <h2>Web Developer</h2>
                    <h2>Future Engineer</h2>

                </div>
            </div>



        </Fragment>
    )
}

export default Header
