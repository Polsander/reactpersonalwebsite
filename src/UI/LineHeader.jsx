import React from 'react'

import classes from './LineHeader.module.css';

const LineHeader = (props) => {
    return (
        <div className={`row mt-3 mb-3 ${classes.header}`}>
            <h2 className="text-center">
                {props.headerTitle}
            </h2>
        </div>
    )
}

export default LineHeader
