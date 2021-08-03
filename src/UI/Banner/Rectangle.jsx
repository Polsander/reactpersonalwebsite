import React from 'react'

import classes from './Rectangle.module.css';

import BannerText from './BannerText';

const Rectangle = (props) => {
    return (
        <div className={classes.rectangle}>
            {props.children}
            <BannerText
                projectDesc={props.projectDesc}
                projectTitle={props.projectTitle}
                svgIcon={props.svgIcon}
                projectLink={props.projectLink}
            />
        </div>
    )
}

export default Rectangle
