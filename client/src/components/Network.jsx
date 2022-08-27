import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

//import style sheet module
import styles from './Network.module.css'

// component contains links and buttons to my resume and contact info
function Network() {
  return (
    <div className=' shadow border-top border-bottom my-5 cbg-primary'>
    <Container>
        <Row className='display-5 mt-5 mb-5'>
            <Col className='py-3 d-flex justify-content-center'>
                <a href="https://drive.google.com/file/d/1dlRSQYWdfWrweJATZy-3cAH85qMh2Tvo/view?usp=sharing">
                    <Button className={styles.btn} size="lg">Resume</Button>
                </a>
            </Col>
            <Col className='py-3 d-flex justify-content-center'>
                <a href="mailto:oerdmann@uwaterloo.ca">
                    <Button className={styles.btn} size="lg">Contact</Button>
                </a>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Network