import React, { Fragment } from 'react'

import classes from './BannerText.module.css';

const BannerText = (props) => {
    return (
        <Fragment>
            <div className={`row ${classes.textstyle}`}>
                <h3> <a target="_blank" rel="noreferrer" href={props.projectLink}>{props.projectTitle}</a></h3>
            </div>
            <div className={`row justify-content-center offset-1 mt-1 ${classes.textstyle}`}>
                <div className="col-7">
                    <p>{props.projectDesc}</p>
                </div>
                <div className={` col-1 offset-1 justify-content-end ${classes.icon}`}>
                    {props.svgIcon}
                </div>
            </div>
        </Fragment>
    )
}

export default BannerText
