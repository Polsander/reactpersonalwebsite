import React, {useState, useEffect} from 'react'

function IsMobile() {
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
  return (isMobile)
}

export default IsMobile