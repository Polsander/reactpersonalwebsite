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
                I am currently a chemical engineering student at the University of Waterloo and currently in my 4th year of studies. I am looking for
                an 4-month co-op/internship in the summer of 2023 to enhance my toolbelt and gain more experience in the real world.
                <br></br><br/>
                I am very passionate in software development (specifically full-stack web development), and love working with new
                frameworks and back-end servers to build clean, responsive, modern websites. I also greatly enjoy studying and working with chemical engineering concepts
                with having a particular interest in using numerical methods to solve mass-transfer problems in reactor design. I consider myself a life-long
                learner who loves working with others and contributes to a collaborative environment.
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About