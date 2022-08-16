import React from 'react'

//below are imports for any components that may be used
import Banner from '../components/Banner'
import IntroHeader from '../components/IntroHeader'

function Main() {
  return (
    <div>
        <Banner>
          <IntroHeader/>
        </Banner>
    </div>
  )
}

export default Main