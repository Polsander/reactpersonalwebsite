import React from 'react'

import bgvideo from '../assets/bgvideo2.mp4'
import bgvideo2 from '../assets/bgvideo2.mp4'
//styles sheet
import styles from './Banner.module.css';

function Banner(props) {
  return (
    <div className={styles.banner}>
        <video src={bgvideo2} autoPlay loop muted/>
        <div className={styles.overlay}>
            {props.children}
        </div>
    </div>
  )
}

export default Banner