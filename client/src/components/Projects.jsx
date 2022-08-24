import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import Project from './Project'

import brothersingaming2 from '../assets/projectphotos/brothersingaming2.PNG'
import ozone from '../assets/projectphotos/ozone.PNG'
import big from '../assets/projectphotos/big.png'

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1600,
            once: true,
        });
    });

    const description1 = `A full-stack functional mock of a gaming blog known as BrothersInGaming. Written with EJS templating,
     Express backend, and utilizes a MongoDB database. Users are permitted to create accounts, publish their own images and articles,
     as well as post their own comments. Certain routes are protected with middleware and has standard authentication and authorization.
     `
     const description2 = `An application used to calculate the stock of ozone gernerators 
     between shipping and receiving transactions from two warehouses. Built upon Node.js and also using MongoDB, this app contains 
     Node scheduler which is used in an alogrithm to notify users when they should restock products based on historically collected data 
     on the rate of sales/exports.`

     const description3 = `My own cusom wordpress theme I built using CSS, SCSS, and PHP for my live gaming blog site that is used as a side project.`

  return (
    <div>
        <div className='shadow border-top border-bottom my-5 cbg-primary'>
            <Container>
                <h2 className="cstm-text display-5 mt-5 mb-5"> Interesting Projects</h2>
            </Container>
        </div>
        <Container>
            <div data-aos="fade-right" data-aos-once="true">
                <Row>
                    <Project 
                    side="left"
                    projectTitle = "BrothersInGaming Full Stack App"
                    description = {description1}
                    buttonTitle = "Source Code"
                    buttonLink = 'https://github.com/Polsander/gaming-blog'
                    imgSrc={brothersingaming2}
                    />
                    <hr />
                </Row>
            </div>
            <div data-aos="fade-left" data-aos-once="true">
                <Row>
                    <Project
                    side="right"
                    projectTitle = "Inventory Tracker"
                    description = {description2}
                    buttonTitle = "Source Code"
                    buttonLink = "https://github.com/Polsander/inventory-and-stock-tracker"
                    imgSrc={ozone}
                    />
                    <hr />
                </Row>
            </div>
            <div data-aos="fade-right" data-aos-once="true">
                <Row>
                    <Project
                    side="left"
                    projectTitle = "BrothersInGaming"
                    description = {description3}
                    buttonTitle = "Website"
                    buttonLink = "https://www.brothersingaming.com/"
                    imgSrc={big}
                    />
                    <hr />
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Projects