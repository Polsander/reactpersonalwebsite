import React from 'react'

//below are imports for any components that may be used
import Banner from '../components/Banner'
import IntroHeader from '../components/IntroHeader'
import About from '../components/About'
import Network from '../components/Network'

function Main() {
  return (
    <div>
        <Banner>
          <IntroHeader/>
        </Banner>
        <About/>
        <Network/>
    </div>
  )
}

export default Main