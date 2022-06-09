import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

const Contact = () => {
  const sweetalert=()=>{
    swal({
      title: 'Gracias',
      text: 'Su mensaje se ha enviado con eso',
      icon: 'success',
      button: 'Aceptar'
    })
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ryls9lt', 'template_1tkt9n7', form.current, 'Bsobfe_QrVYr2bR9C')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Para mas info</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>oswaluis8@gmail.com</h5>
            <a href="mailto:oswaluis8@gmail.com" target='_blank'>Enviar Mensaje</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+5491126175807</h5>
            <a href="https://api.whatsapp.com/send?phone=541126175807" target='_blank'>Enviar Mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required/>
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message"  rows="10" placeholder='Escribe aqui tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={()=>sweetalert()}>Enviar mensaje</button>
        </form>
      </div>

    </section>
  )
}

export default Contact