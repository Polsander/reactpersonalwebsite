import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import Project from './Project'

function Projects() {
  return (
    <div>
        <div className='shadow border-top border-bottom my-5 cbg-primary'>
            <Container>
                <h2 className="cstm-text display-5 mt-5 mb-5">Projects</h2>
            </Container>
        </div>
        <Container>
            <Row>
                <Project/>
            </Row>
        </Container>
    </div>
  )
}

export default Projects