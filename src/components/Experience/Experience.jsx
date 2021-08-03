import React, { Fragment } from 'react'

import LineHeader from '../../UI/LineHeader';
import Card from './Card';
import TextList from './TextList';
import CardText from './CardText';
import Button from '../../UI/Button';

const Experience = () => {
    const paragraphText = <div>
        <p>
            I have worked as web developer in both independent projects and in a corporate setting.
            Using the tools and technologies I am familiar with, I have constructed important stock tracking software
            with mathematical algorithms as well as successful monotized blogs.
        </p>

        <p>
            I feel comfortable working with wordpress, React, or clean applications with no frameworks.
            My code is held to high standards as I put pride and commitment to create beautiful, responsive,
            and professional web applications.
        </p>
        <h5 style={{ color: 'orangered' }}>Engineering Skills</h5>
        <p>
            As for my non-webdev related skills, I also have a deep passion in the engineering process.
            Through out my chemical engineering undergraduate journey, I worked with designing P&ID's, ASPEN
            software, planning & design processes, as well as extensive problem solving and communication skills.
        </p>
    </div>
    return (
        <Fragment>
            <LineHeader headerTitle="My Experience" />
            <div className="row">
                <div className=" mt-2 col justify-content-center">
                    <Card >
                        <TextList />
                    </Card>
                </div>
                <div className=" mt-2 col justify-content-center">
                    <Card >
                        <CardText title={'My Experience & What I Offer'} content={paragraphText} />
                    </Card>
                </div>
            </div>
            <Button buttonText="My Resume" />


        </Fragment>
    )
}

export default Experience
