import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

//icons
import {FaCode, FaLayerGroup, FaDatabase} from 'react-icons/fa'

import styles from './Skills.module.css'

const iconClass = `cstm-secondary ${styles.icon}`

function Skills() {
  return (
    <div>
        <Container>
            <Row className='mb-4'>
                <Col>
                    <div className='d-flex flex-column align-items-center '>
                        <h2 className=" cstm-text display-5 mt-5">Languages</h2>
                        <FaCode className={iconClass}/>
                        <ul className={styles.list}>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>HTML/CSS</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    
                </Col>
                <Col>
                    <div className='d-flex flex-column align-items-center '>
                        <h2 className="cstm-text display-5 mt-5">Libraries/Frameworks</h2>
                        <FaLayerGroup className={iconClass}/>
                        <ul className={styles.list}>
                            <li>Node.js</li>
                            <li>Django</li>
                            <li>Express</li>
                            <li>Vue</li>
                            <li>React</li>
                        </ul>
                    </div>
                </Col>
                <div className='d-flex flex-column align-items-center '>
                    <h2 className=" cstm-text display-5 mt-5">Databases</h2>
                    <FaDatabase className={iconClass}/>
                    <ul className={styles.list}>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>And learning much more!</li>
                    </ul>
                </div>
            </Row>
            
        </Container>
    </div>
  )
}

export default Skills