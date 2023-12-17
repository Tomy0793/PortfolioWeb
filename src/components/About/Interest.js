import React, { useState } from 'react'
import './About.css' 
import Avatar from '../../images/Content/avatar.png'
import Me from './me'
import Hobbies from './hobbies'
import WorkVision from './WorkVision'
const Interest = () => {

  const components = [<Me/>,<Hobbies/>, <WorkVision/>  ]
  const [indexComponent, setIndexComponent] = useState(0)

  const showNextComponent = ()=>{
    setIndexComponent((prevIndex) =>(prevIndex + 1) % components.length )
  }

  return (
    <div className='container-about'>
        {components[indexComponent]}
        <button className='btn-mobile' onClick={showNextComponent}>Next</button>
    <img className='avatar' id='avatarAbout' src={Avatar} alt='avatar'/>
    </div>


  )
}

export default Interest