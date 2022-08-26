import React from 'react'

//below are imports for any components that may be used
import Banner from '../components/Banner'
import IntroHeader from '../components/IntroHeader'
import About from '../components/About'
import Network from '../components/Network'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import IconLinks from '../components/IconLinks'

function Main() {
  return (
    <div>
      <Banner height={400} boxShadow={true}>
        <IntroHeader/>
        <IconLinks/>
      </Banner>
      <About/>
      <Network/>
      <Skills/>
      <Projects/>
      <div className='mt-5 pt-5'>
        <Banner height={225}>
          <Footer/>
        </Banner>
      </div>
    </div>
  )
}

export default Main