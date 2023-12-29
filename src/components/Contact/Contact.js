import Form from 'react-bootstrap/Form';
import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import "../../components/Contact/Contact.css"
import formImg from "../../images/Content/form-cont.png"
import pencil from "../../images/Content/pencil.png"
import mug from "../../images/Content/mug.png"
import table from "../../images/Content/table.png"
import linkedin from "../../images/Content/linkedin-icon.png"
import github from "../../images/Content/github-icon.png"
import cv from "../../images/Content/cv-icon.png"
import pdf from "../../images/cv/tomas-ninno.pdf"
const Contact = () => {
  const [content, setContentVisible] = useState(false)

  useEffect(()=>{
  const visible = setTimeout(() => {
      setContentVisible(true)
  }, 6000);

  return () => clearTimeout(visible)

  }, [])


  return (
    <div className='container'>
<Loader/>
{content ? (
        <>
        <img className='mesa' src={table} alt='mesa' />
        <a href='https://www.linkedin.com/in/tomas-ninno-a19b631b7/' target='_blank'><img className='icons' id='in' src={linkedin} alt='linkedin' /></a>
        <a href='https://github.com/Tomy0793' target='_blank'><img className='icons' id='git' src={github} alt='github' /></a>
        <a href={pdf} download="ResumeTomasNinno"><img className='icons' src={cv} id='cv' alt='cv' /></a>
        <img className='mug' src={mug} alt='mug' />
        <img className='form-img' src={formImg} alt='form' />
        <img className='pencil' src={pencil} alt='pencil' />
        <div className='form-container'>
          
          <form className='formcon' action="https://formspree.io/f/mnqeqqpg" method="post">
        <label for="nombre">Name:</label>
        <input type="text" id="nombre" name="nombre" required/>

        <label for="correo">Email address:</label>
        <input type="email" id="correo" name="correo" required/>

        <label for="mensaje">Message:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Send</button>
        <button type="reset">Reset</button>
    </form>
        </div>
        </>
        
        ) : null }
    </div>
  )
}

export default Contact




