import React from 'react'

import {TypeAnimation} from 'react-type-animation'

import styles from './IntroHeader.module.css'

function IntroHeader() {
  return (
    <div className={styles.intro}>
        <TypeAnimation
        sequence={["Oliver Erdmann", 10000]}
        />
    </div>
  )
}

export default IntroHeader