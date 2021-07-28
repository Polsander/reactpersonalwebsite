import React, {Fragment} from 'react'

import Rectangle from './Rectangle';
import Triangle from './Triangle';

const Banner = () => {
    return (
        <div className="row justify-content-center mt-5">
            <Rectangle>
                <Triangle/>
            </Rectangle>
        </div>
    )
}

export default Banner
