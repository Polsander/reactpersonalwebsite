import React from 'react'

import Typed from 'react-typed'
//style sheets
import styles from './IntroHeader.module.css'

function IntroHeader() {
  return (
    <div>
      <h1 className={styles.name} >Oliver Erdmann</h1>
      <Typed
      className={styles.subtext}
      strings={[`Software engineer`, "Chemical Engineer", "Awesome guitar player"]}
      typeSpeed={60}
      backDelay={2000}
      backSpeed={60}
      smartBackspace
      loop
      />
    </div>
    
  )
}

export default IntroHeader