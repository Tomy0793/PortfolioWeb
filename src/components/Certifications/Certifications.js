import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import "../Certifications/Certifications.css";
import CertificateJs from "../../images/Content/certificate-js.png"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
import Avatar from "../../images/Content/avatar.png"
import BadgeJs from "../../images/Content/js-bagde.png"
import BadgeEn from "../../images/Content/english-badge.png"
import BadgeHt from "../../images/Content/html-badge.png"
import BadgeRe from "../../images/Content/react-badge.png"
import CertificateEn from "../../images/Content/certificate-english.png"
import CertificateRe from "../../images/Content/certificate-react.png"
import CertificateHt from "../../images/Content/certificate-html.png"
const Certifications = () => {

  const [content, setContentVisible] = useState(false)
  const [showCertificate, setShowCertificate] = useState (null)
  const [activeCert, setActiveCert] = useState(null)
  const [reset, setReset] = useState(false);

  useEffect(()=>{
  const visible = setTimeout(() => {
      setContentVisible(true)
  }, 6000);

  return () => clearTimeout(visible)

  }, [])

  const hoverCert = (id) =>{
    setShowCertificate (id)
    setActiveCert(id);
    console.log("pasando por el certificado")
  }

  const isCertHovered = (id) => {
    return showCertificate === id;
  }

  const activateLight = (id) => {
    const isActive = activeCert === id;
    
    const style = {
      transform: isCertHovered(id) ? "scale(1.8)" : "scale(1)" ,
      marginTop: isCertHovered(id) ? "113px" : "30px",
      transition: "transform 0.3s ease-in-out, border 0.3s ease-in-out, margin 0.3s ease-in-out",
      zIndex: isCertHovered(id) ? "2" : "1",
    }
    
    switch (id) {
      case "cert-1":
        return{ 
      ...style,
          marginLeft: isCertHovered(id) ? "143px" : "0px",
                  
        }    
        
      case "cert-2":
          return{ 
            ...style,
            marginLeft: isCertHovered(id) ? "0px" : "0px",
          } 
      case "cert-3":
            return{ 
              ...style,
              marginLeft: isCertHovered(id) ? "0px" : "0px",
              }    
      case "cert-4":
              return{ 
                ...style,
                marginRight: isCertHovered(id) ? "113px" : "0px",
              }    
      default:  
        break;
  }
} 

const activateModal = (id) =>{

  const style ={
    display: isCertHovered(id) ? "block" : "none" 
  }
  switch (id) {
    case "cert-1":
      return{...style}
      case "cert-2":
      return{...style}  
      case "cert-3":
      return{...style}
      case "cert-4":
      return{...style}  
      default:
      break;

}
} 
  const activateAvatar = (id) => {
    const styles1={
      transform: isCertHovered(id) ? "scaleX(-1)" :   "none",
      marginLeft: isCertHovered(id) ? "440px" : "0px",
      zIndex: isCertHovered(id) ? "2" : "0"
    }

    const styles2={
      marginLeft: isCertHovered(id) ? "-440px" : "0px",
              zIndex: isCertHovered(id) ? "2" : "0"
    }

    switch (id) {
      case "cert-1":
        return{ ...styles1}    
        
      case "cert-2":
          return{...styles1} 
      case "cert-3":
            return{...styles2}    
      case "cert-4":
              return{...styles2}    
      default:  
        break;
    }
    
  }

const btnBack = (id) =>{
const style = {
  display: isCertHovered(id) ? "block" : "none",
}
  switch (id) {
    case "cert-1":
      return{
    ...style,
    position: isCertHovered(id) ? "absolute" : "none",     
    marginRight: isCertHovered(id) ? "56%" : "none",
    marginTop: isCertHovered(id) ? "32.4%" : "none",
    zIndex: isCertHovered(id) ? "2" : "0"
  }  
  case "cert-2":
      return{ 
        ...style,
        position: isCertHovered(id) ? "absolute" : "none",    
        marginRight: isCertHovered(id) ? "24%" : "none",
        marginTop: isCertHovered(id) ? "32%" : "none",
        zIndex: isCertHovered(id) ? "2" : "0"
  }
  case "cert-3":
    return{ 
      ...style,    
      position: isCertHovered(id) ? "absolute" : "none",
      marginLeft: isCertHovered(id) ? "25%" : "none",
      marginTop: isCertHovered(id) ? "32%" : "none",
      zIndex: isCertHovered(id) ? "2" : "0"
}
case "cert-4":
  return{ 
    ...style,    
    position: isCertHovered(id) ? "absolute" : "none", 
      marginLeft: isCertHovered(id) ? "60%" : "none",
      marginTop: isCertHovered(id) ? "32.4%" : "none",
      zIndex: isCertHovered(id) ? "2" : "0"
}
  
    default:
      break;
  }
}


const certSkills = (id) =>{
 
  const styles1 = {
    position: isCertHovered(id) ? "absolute" : "none",
    display: isCertHovered(id) ? "block" : "none",     
    marginLeft: isCertHovered(id) ? "60%" : "none",
    marginTop: isCertHovered(id) ? "0%" : "none",
    zIndex: isCertHovered(id) ? "2" : "0"
  }
  const styles2 = {
    position: isCertHovered(id) ? "absolute" : "none",
    display: isCertHovered(id) ? "block" : "none",     
    marginLeft: isCertHovered(id) ? "-60%" : "none",
    marginTop: isCertHovered(id) ? "0%" : "none",
    transform: isCertHovered(id) ? "scaleX(-1)" : "scaleX(1)",
    zIndex: isCertHovered(id) ? "2" : "0"
    
  }
  switch (id) {
    
    case "cert-1":
      return{...styles1}    
    case "cert-2":
      return{...styles1}    

    case "cert-3":
      return{...styles2}    

    case "cert-4":
      return{...styles2}    
    default:
      break;
  }
}

  const handleReset = () => {
    setShowCertificate(null);
    setActiveCert(null);
    setReset(true);
};

  return (
    <div className="principal-container">
      <Loader />
      {content && (
        <>
     <div className= "certification-container" id='cert-1' onClick={()=> hoverCert('cert-1')} style={activateLight("cert-1")}>
            <img className='img-cert' src={CertificateEn} alt='certificate' />
            <img className='img-badge' src={BadgeEn} alt='badge'/>
          </div>
     <div className= "certification-container" id='cert-2' onClick={()=> hoverCert('cert-2')} style={activateLight("cert-2")}>
            <img className='img-cert' src={CertificateHt} alt='certificate' />
            <img className='img-badge' src={BadgeHt} alt='badge' />
          </div>
    <div className= "certification-container" id='cert-3'onClick={()=> hoverCert('cert-3')} style={activateLight("cert-3")}>
            <img className='img-cert' src={CertificateJs} alt='certificate' />
            <img className='img-badge' src={BadgeJs} alt='badge' />
          </div>
    <div className= "certification-container" id='cert-4' onClick={()=> hoverCert('cert-4')} style={activateLight("cert-4")} >
            <img className='img-cert' src={CertificateRe} alt='certificate' />
            <img className='img-badge' src={BadgeRe} alt='badge' />
          </div>
    <img className='avatar1' src={Avatar} alt='avatar' style={activateAvatar(showCertificate)} />
          <div className='prueba' style={activateModal(showCertificate)}>
          </div>
          <button className='btn-back' onClick={handleReset} style={btnBack(showCertificate)} >Volver</button>      
          <div className='cert-skills' style={certSkills(showCertificate)}></div>
        </>
      )}
    </div>
  );
}

export default Certifications