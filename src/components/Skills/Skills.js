import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import './skilss.css'
import btnTv from "../../images/Content/btn-tv.png"
import Avatar from "../../images/Content/avatar.png"
import Video from "../../images/Content/videocaset.png"
import Vhs1 from "../../images/Content/softs-skills.png"
import Vhs2 from "../../images/Content/web-skills.png"
import { TypeAnimation } from 'react-type-animation'

const Skills = () => {
  const [content, setContentVisible] = useState(false)
  const [tvContent, setTvContent] = useState(1)
  const [showSkills, setShowSkills] = useState(false)
const [showSoftSkills, setShowSoftSkills] = useState(false)
  const [showDisplay, setShowDisplay] = useState(true)
  useEffect(()=>{
  const visible = setTimeout(() => {
      setContentVisible(true)
  }, 6000);

  return () => clearTimeout(visible)

  }, [])

  const showContent = [
     <div className='content-tv' key={1} id="ss1">
        <h3 className='h3-tv' id="tv-3">Active Listening</h3>
     </div>,
     <div className='content-tv' key={2} id="ss2">
        <h3 className='h3-tv' id="tv-3">Clear Verbal Expression</h3>
     </div>,
     <div className='content-tv' key={3} id="ss3">
        <h3 className='h3-tv' id="tv-3">Teamwork</h3>
    </div>,
    <div className='content-tv' key={4} id="ss4">
        <h3 className='h3-tv' id="tv-3">Critical Thinking</h3>
    </div>,
    <div className='content-tv' key={5} id="ss5">
        <h3 className='h3-tv' id="tv-3">Decision Making</h3>
    </div>,
    <div className='content-tv' key={6} id="ss6">
        <h3 className='h3-tv' id="tv-3">Creativity</h3>
    </div>,
    <div className='content-tv' key={7} id="ss7">
        <h3 className='h3-tv' id="tv-4">Flexibility</h3>
    </div>,
    <div className='content-tv' key={8} id="ss8">
        <h3 className='h3-tv' id="tv-3">Continuous Learning</h3>
    </div>,
    <div className='content-tv' key={9} id="ss9">
        <h3 className='h3-tv' id="tv-3">Efficient Planning</h3>
    </div>,
        <div className='content-tv' key={10} id="ss10">
        <h3 className='h3-tv'id="tv-5" >Responsibility</h3>
    </div>,
    <div className='content-tv' key={11} id="ss11">
        <h3 className='h3-tv' id="tv-6">Ability to Overcome Challenges and Adapt to Adversity</h3>
    </div>,
  ]

 const showSoftContent = [
    <div className='content-tv' key={1} id="tv1">
      <h3 className='h3-tv'>HTML</h3>
    </div>,
    <div className='content-tv' key={2} id="tv2">
      <h3 className='h3-tv'>CSS</h3>
    </div>,
  <div className='content-tv' key={3} id="tv3">
      <h3 className='h3-tv' id="tv-3">Bootstrap</h3>
  </div>,
  <div className='content-tv' key={4} id="tv4">
      <h3 className='h3-tv' id="tv-3">Javascript</h3>
  </div>,
  <div className='content-tv' key={5} id="tv5">
      <h3 className='h3-tv'>React</h3>
</div>,
  <div className='content-tv' key={6} id="tv6">
      <h3 className='h3-tv'>Node.Js</h3>
  </div>,
        <div className='content-tv' key={7} id="tv7">
        <h3 className='h3-tv'>Github</h3>
      </div>,
  ] 

const contentDisplay = [
  <div className='content-tv' key={1} id="tv1">
  <h3 className='h3-tv1'>Click on the cassette, and then on the TV button to proceed forward.</h3>
</div>
]
const activateVhs = (id) =>{
 switch (id) {
  case "vhs1":

    setShowSkills(true)
    setShowSoftSkills(false)
    setShowDisplay(false)
    console.log("Activando soft skills")
    break;
 case "vhs2":
    setShowSkills(false)
    setShowSoftSkills(true)
    setShowDisplay(false)
    console.log("Activando web skills")
  break;
  default:
      setShowSkills(false)
    setShowSoftSkills(false)
    setShowDisplay(true)
    break;
 }


}
const handleClick = () => {
  if (showSkills) {
    setTvContent((prevContent) => (prevContent + 1) % showContent.length);
  } else if (showSoftSkills) {
    setTvContent((prevContent) => (prevContent + 1) % showSoftContent.length);
  }
};

const hoverCert = (id) =>{
  console.log("pasando por el certificado")
}


  return (
    <div>
<Loader/>
{content ? (
        <>
        <div className='skill-container container-fluid'>
        <div className='vhs-container'>
        <img className='vhs1' id='vhs1' src={Vhs1} alt='video' onClick={()=> { hoverCert('vhs1'); activateVhs("vhs1") } } />
        <img className='vhs2' id='vhs2' src={Vhs2} alt='video' onClick={()=> { hoverCert('vhs2'); activateVhs("vhs2") }} />
        </div>
        <div className='tv-container'>
        
        <img className='video' src={Video} alt='video' />  
        <img className='img-avatar' src={Avatar} alt='btn-tv' />
        <div className='tv'>
        <div className='casette'>Skills</div>         
          {/* {showContent[tvContent]} */}
          {showDisplay && contentDisplay}
          {showSoftSkills && showSoftContent[tvContent]}
          {showSkills && showContent[tvContent]}
          
        </div>
        <button className='btn-tv'><img className='img-btn-tv' src={btnTv} alt='btn-tv' onClick={handleClick} /></button>
        </div>
        
        </div>
        </>
        
        ) : null }
    </div>
  )
}

export default Skills


/* idea para desarrollar: hacer videocasetera, 2 vhs, que 1 vhs sea soft sklls, y el otro sea develop skills. la idea es que muestre eltelevisor cada uno segun el eseleccionado */
