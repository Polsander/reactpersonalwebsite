import React from 'react'

import styles from './Banner.module.css'
import bgvideo2 from '../assets/bgvideo2.mp4'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'


function Banner(props) {
  // Style variables
  const boxShadow = props.boxShadow ? 'shadow' : null;
  const bannerStyle = `${styles.banner} ${boxShadow}`

  return (
    <Container fluid style={{height: props.height}} className={bannerStyle}>
        <Row>
            <video src={bgvideo2} style={{height: props.height}} autoPlay loop muted/>
                {props.children}
        </Row>
    </Container>
  )
}

export default Banner