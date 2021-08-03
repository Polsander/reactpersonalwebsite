import React, { Fragment, useState } from 'react'

import classes from './AboutMe.module.css';

import DropButton from '../../UI/DropButton';
import Description from './Description';


const AboutMe = (props) => {

    const [buttonDrop, setButtonDrop] = useState(false);
    const [revealParagraph, setRevealParagraph] = useState(false);

    const paragraphDesc = <Description paragraphText={props.paragraphText} />


    function showButtonHandler() {


        if (revealParagraph) {
            setRevealParagraph(false);
            setButtonDrop(false);
            return;

        }
        else {
            setRevealParagraph(true);
            setButtonDrop(true);
            return;
        }
    }



    return (
        <Fragment>
            <div className={`card mt-5 ${classes.cardstyle}`}>
                <div className="card-title text-center">
                    <h4>{props.title}</h4>
                </div>
                <div className="text-center">
                    <DropButton onDropClick={showButtonHandler} svgIcon={buttonDrop} />
                        <span className={classes.transition}>
                            {revealParagraph && paragraphDesc}
                        </span>
                </div>
            </div>

        </Fragment>
    )
}

export default AboutMe
