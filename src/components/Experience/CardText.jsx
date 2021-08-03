import React, { Fragment } from 'react'

import classes from './CardText.module.css';

const CardText = (props) => {
    return (
        <div className={classes.cardBody}>
            <h3 className="text-center">{props.title}</h3>
            <Fragment>{props.content}</Fragment>
        </div>
    )
}

export default CardText
