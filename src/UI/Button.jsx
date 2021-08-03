import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
    return (
        <div className="row mt-5 mb-4 text-center">
            <div className={`${classes.buttonStyle}`}>
            <button>
                {props.buttonText}
            </button>
        </div>
        </div>
        

    )
}

export default Button
