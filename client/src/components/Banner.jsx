import React from 'react'

import bgvideo from '../assets/bgvideo.mp4'

function Banner() {
  return (
    <div className='Banner'>
        <video src={bgvideo} autoPlay loop muted/>
    </div>
  )
}

export default Banner