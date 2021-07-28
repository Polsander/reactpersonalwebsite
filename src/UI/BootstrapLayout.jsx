import React from 'react'

const BootstrapLayout = (props) => {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    )
}

export default BootstrapLayout
