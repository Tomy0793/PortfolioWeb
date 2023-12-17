import Form from 'react-bootstrap/Form';
import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import "../../components/Contact/Contact.css"
import formImg from "../../images/Content/form-cont.png"
import pencil from "../../images/Content/pencil.png"
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
        <img className='form-img' src={formImg} />
        <img className='pencil' src={pencil} />
        <div className='form-container'>
          
          <form action="#" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required/>

        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required/>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
        <button type="reset">Limpiar</button>
    </form>
        </div>
        </>
        
        ) : null }
    </div>
  )
}

export default Contact




