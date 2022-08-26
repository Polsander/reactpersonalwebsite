import React from 'react'

import {FaGithub, FaLinkedin, FaAt} from 'react-icons/fa'


import styles from './IntroHeader.module.css'
import iconCss from './IconLinks.module.css'

const iconStyle = `${iconCss.icon} ms-3 mt-3`
const firstIcon = `${iconCss.icon} ms-1 mt-3`

function IconLinks() {
  return (
    <div className={styles.overlay}>
        <div>
            <a href="https://github.com/Polsander" className={iconCss.anchor}>
                <FaGithub className={firstIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/oliver-erdmann/" className={iconCss.anchor}>
                <FaLinkedin className={iconStyle}/>
            </a>
            <a href="mailto:oerdmann@uwaterloo.ca" className={iconCss.anchor}>
                <FaAt className={iconStyle}/>
            </a>
        </div>
    </div>
  )
}

export default IconLinks