import React from 'react'
import {useEffect, useState} from 'react'
import '../Loader/Loader.css'
import Loader1 from '../../images/Loaders/Loader1.png'
import Loader2 from '../../images/Loaders/Loader2.png'

const Loader = () => {
  
  const [showImage1, setShowImage1] = useState(true)
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    const intervalId = setInterval(()=>{
        setShowImage1((prev)=> !prev)
    },500)


    const hideLoader = setInterval(()=>{
        setVisible(false)
    },5000)

    return() =>{

        clearInterval(intervalId)
        clearInterval(hideLoader)
    } 

  }, [])

    return visible ? (
    
<div className="loader-container">
      <div className="loader">
        <img
          src={showImage1 ? Loader1 : Loader2}
          alt={showImage1 ? 'Loader 1' : 'Loader 2'}
          className={showImage1 ? 'image1' : 'image2'}
        />
        <img
          src={showImage1 ? Loader2 : Loader1}
          alt={showImage1 ? 'Loader 2' : 'Loader 1'}
          className={showImage1 ? 'image2' : 'image1'}
        />
        
      </div>
      <h2>Loading</h2>
    </div>

  ) : null
}

export default Loader