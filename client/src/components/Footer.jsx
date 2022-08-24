import React from 'react'

import styles from './IntroHeader.module.css'
function Footer() {
    const overlay = `${styles.overlay} d-flex align-items-center justify-content-center`
  return (
    <div className={overlay}>
        <div>
            <h2 className='fs-1 cstm-secondary'>Thanks for Visiting!</h2>
        </div>
    </div>
  )
}

export default Footer