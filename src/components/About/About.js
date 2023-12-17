import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import Interest from './Interest'
const About = () => {
  const [content, setContentVisible] = useState(false)

  useEffect(()=>{
  const visible = setTimeout(() => {
      setContentVisible(true)
  }, 6000);

  return () => clearTimeout(visible)

  }, [])


  return (
    <div>
<Loader/>
{content ? (
        <>
        
        <Interest/>
        </>
        
        ) : null }
    </div>
  )
}

export default About