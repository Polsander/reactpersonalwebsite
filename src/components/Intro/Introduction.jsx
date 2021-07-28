import React, { Fragment } from 'react'

import classes from './Introduction.module.css';

import AboutMe from './AboutMe';

const Introduction = () => {
    return (
        <Fragment>
            <div className="row d-flex mt-3">
                <div className="col-lg-6 col-sm-12">
                    <img className={`img-responsive card-img ${classes.personalimage}`} src="/images/oliver.PNG" alt="Oliver" />
                </div>
                <div className=" col-xl-5 col-lg-6 col-sm-12 mt-xl-4 mt-lg-2">
                    <AboutMe title="Who Am I?" paragraphText={
                        <div className="text-start ms-2 me-2">
                            <p>
                                Hi there, and welcome to my website! My Name is Oliver, and I am a 2nd year student
                                shortly going into my 3rd year at the <b>University of Waterloo</b> where I am studying
                                <b> chemical engineering</b>.
                            </p>
                            <p>
                                I am a very curious in general, and put a lot of effort into learning things that interest me (like coding and web development).
                                Trying new things and taking on challenges is my philosophy on how I can grow and become the best individual I can be.
                            </p>
                            <p>
                                On my free time I love playing the guitar 🎸,<br></br>
                                Officiating High-Level Baseball ⚾, <br />
                                And (to no surprise) playing video games 🎮.
                            </p>
                        </div>
                    } />
                </div>


            </div>
        </Fragment>
    )
}

export default Introduction
