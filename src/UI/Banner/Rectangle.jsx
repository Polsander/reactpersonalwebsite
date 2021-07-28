import React from 'react'

import classes from './Rectangle.module.css';

const Rectangle = (props) => {
    return (
        <div className={classes.rectangle }>
            {props.children}
        </div>
    )
}

export default Rectangle
