import React from 'react'

import classes from './Description.module.css';

const Description = (props) => {
    return (
        <div className={classes.innercard}>
            {props.paragraphText}
        </div>
    )
}

export default Description
