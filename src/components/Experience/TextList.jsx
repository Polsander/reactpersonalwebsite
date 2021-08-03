import React, { Fragment } from 'react'

import classes from './TextList.module.css';

const languages = [
    {
        id: 1,
        languageName: 'JavaScript',
    },
    {
        id: 2,
        languageName: 'Python',
    },
    {
        id: 3,
        languageName: 'PHP',
    },
    {
        id: 4,
        languageName: 'HTML',
    },
    {
        id: 5,
        languageName: 'CSS',
    }
];

const technologies = [
    {
        id: 10,
        technologyName: 'Node.js',
    },
    {
        id: 11,
        technologyName: 'Express',
    },
    {
        id: 12,
        technologyName: 'React Framework',
    },
    {
        id: 13,
        technologyName: 'VanillaJS',
    },
    {
        id: 14,
        technologyName: 'MongoDB',
    },
    {
        id: 15,
        technologyName: 'Git',
    }
];



const TextList = () => {
    return (
        <Fragment>
            <h2 className={`text-center ${classes.textColor}`}>What I know</h2>
            <h3 className={classes.textColor}>Languages</h3>
            <div className={classes.languageList}>
                <ul>
                    {languages.map(language => {
                        return (<li className={classes.listStyle} key={language.id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            {language.languageName}</li>)
                    })}
                </ul>
            </div>
            <h3 className={classes.textColor}>Technologies</h3>
            <div className={classes.languageList}>
                <ul>
                    {technologies.map(technology => {
                        return (<li className={classes.listStyle} key={technology.id}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            {technology.technologyName}</li>)
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default TextList
