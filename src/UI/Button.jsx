import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
    return (
        <div className="row mt-5 mb-4 text-center">
            <div className={`${classes.buttonStyle}`}>
                <a href={props.buttonLink}>
                    <button>
                        {props.buttonText}
                    </button>
                </a>
            </div>
        </div>


    )
}

export default Button
