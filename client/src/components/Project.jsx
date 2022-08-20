import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import Button from 'react-bootstrap/esm/Button'

function Project(props) {
    if (props.side === "right") {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>{props.description}</p>
                        <Button>{props.buttonTitle}</Button>
                    </Col>
                    <Col>
                        <img src={props.imgSrc} alt="project preview/emblem" />
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={props.imgSrc} alt="project preview/emblem" />
                    </Col>
                    <Col>
                        <p>{props.description}</p>
                        <Button>{props.buttonTitle}</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Project