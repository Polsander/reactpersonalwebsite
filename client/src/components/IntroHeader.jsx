import React from 'react'

import Typed from 'react-typed'
//style sheets
import styles from './IntroHeader.module.css'

function IntroHeader() {
  const overlay = `${styles.overlay} d-flex align-items-center justify-content-center`
  return (
    <div className={overlay}>
      <div>
      <h1 className={styles.name} >Oliver Erdmann</h1>
      <span className={styles.lastname}>
      <Typed
      className={styles.subtext}
      strings={[`Software engineer`, "Chemical engineer", "Awesome guitar player"]}
      typeSpeed={60}
      backDelay={2000}
      backSpeed={60}
      smartBackspace
      loop
      />
      </span>
      </div>
    </div>
    
  )
}

export default IntroHeader