import React from 'react'

//below are imports for any components that may be used
import Banner from '../components/Banner'
import IntroHeader from '../components/IntroHeader'
import About from '../components/About'
import Network from '../components/Network'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Main() {
  return (
    <div>
      <Banner height={400} boxShadow={true}>
        <IntroHeader/>
      </Banner>
      <About/>
      <Network/>
      <Skills/>
      <Projects/>
      <Banner height={225}>
      </Banner>
    </div>
  )
}

export default Main