import React from 'react'

//below are imports for any components that may be used
import Banner from '../components/Banner'
import IntroHeader from '../components/IntroHeader'
import About from '../components/About'
import Network from '../components/Network'
import Skills from '../components/Skills'

function Main() {
  return (
    <div>
        <Banner>
          <IntroHeader/>
        </Banner>
        <About/>
        <Network/>
        <Skills/>
    </div>
  )
}

export default Main