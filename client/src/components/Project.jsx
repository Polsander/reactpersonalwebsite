import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import Button from 'react-bootstrap/esm/Button'

import styles from './Project.module.css'

function Project(props) {
    // Need to use a hook to check for mobile screen
    const [width, setWidth] = useState(window.screen.width);
    const handleScreenSize = () => {
        setWidth(window.screen.width);
    }

    useEffect(()=>{
        window.addEventListener('resize',handleScreenSize);
        return ()=> {
            window.removeEventListener('resize',handleScreenSize);
        }
    }, []);
    const isMobile = width <=768

    const img_class = `${styles.img}`

    // Rendering JSX code starts here
    if (props.side === "right" && !isMobile) {
        return (
            <Container className='mb-3'>
                <Row>
                    <Col>
                        <h3><strong>{props.projectTitle}</strong></h3>
                        <p className='1h-base fs-4 mt-3 cstm-text'>{props.description}</p>
                        <Button className={styles.btn}>{props.buttonTitle}</Button>
                    </Col>
                    <Col>
                        <img className={img_class} src={props.imgSrc} alt="project preview/emblem" />
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className='mb-3'>
                <Row>
                    <Col>
                        <img className={img_class} src={props.imgSrc} alt="project preview/emblem" />
                    </Col>
                    <Col>
                        <h3>{props.projectTitle}</h3>
                        <p className='1h-base fs-4 mt-3 cstm-text'>{props.description}</p>
                        <Button className={styles.btn}>{props.buttonTitle}</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Project