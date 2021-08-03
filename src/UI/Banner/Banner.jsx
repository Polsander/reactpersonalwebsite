import React from 'react'

import Rectangle from './Rectangle';
import Triangle from './Triangle';

const Banner = (props) => {
    return (
        <div className="row justify-content-center mt-5">
            <Rectangle
                projectDesc={props.projectDesc}
                projectTitle={props.projectTitle}
                svgIcon={props.svgIcon}
                projectLink={props.projectLink}
            >
                <Triangle />
            </Rectangle>
        </div>
    )
}

export default Banner
