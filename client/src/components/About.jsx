import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personal_image from '../assets/myimg.png'

//style sheet

function About() {
  return (
    <div>
        <Container>
        <h2 className="cstm-text display-5 mt-5 mb-5">About Me</h2>
            <Row>
                <Col xs={12} sm={6}>
                <img className='img-fluid' style={{border: "solid"}} src={personal_image} alt="Me in motorcycle gear" />
                </Col>
                <Col className='fw-bold 1h-base fs-4 mt-3 cstm-text'> 
                Hi! My name is Oliver, and welcome to my website! Whether you stumbled on it by chance or you're looking to get to know me better,
                you can find a few of my projects and social media links here as well as my resume.
                <br></br><br/>
                I graduated and got my bacherlor's degree in chemical engineering at the University of Waterloo in 2024. Currently, I am doing part time studies and I
                am working towards getting my master's degree in chemical engineering. I love incorporating software into my projects as I believe that 
                software can be used as a very powerful both in and out of chemical engineering contexts. I had the pleasure of practicing this when working on building
                simulations for a process at the German Aerospace Center (DLR).
                <br></br><br/>
                During my part time studies, I am available and looking for part-time or full-time work. I have experience in web development, modelling, simulations,
                and I am currently working on exposing myself to firmware and embedded software engineering.
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About