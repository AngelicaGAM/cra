import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Estilos mejorados
import banner1 from '../assets/images/banner1.jpg';
import { useMediaQuery } from 'react-responsive';
import Swal from 'sweetalert2'

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.empty': 'El nombre es requerido',
    'string.min': 'El nombre debe tener al menos 3 caracteres',
    'string.max': 'El nombre no puede tener más de 30 caracteres',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'El email es requerido',
    'string.email': 'Formato de email inválido',
  }),
  phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required().messages({
    'string.empty': 'El teléfono es requerido',
    'string.pattern.base': 'Formato de teléfono inválido',
    'string.min': 'El teléfono debe tener al menos 10 caracteres',
    'string.max': 'El teléfono no puede tener más de 15 caracteres',
  }),
  message: Joi.string().min(10).required().messages({
    'string.empty': 'El mensaje es requerido',
    'string.min': 'El mensaje debe tener al menos 10 caracteres',
  }),
});

const ContactForm: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data: any) => {
    emailjs.send(
      'service_rfzvygg', //  SERVICE_ID
      'template_zphh3rv', // TEMPLATE_ID
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      '4Ip8_xEQ11eTtJ6oO' // USER_ID
    ).then(() => {
     
 

      Swal.fire({
        title: " ¡Oh no!  ",
        html: "¡Mensaje enviado correctamente!  Nuestro equipo se pondra en contacto contigo pronto.",
        showConfirmButton: false,
        icon: "success",
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass:{
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        }
      });

    }).catch(() => {

      Swal.fire({
        title: " ¡Oh no!  ",
        html: "Lo sentimos, hubo un error al enviar tu correo. <br/> Intenta más tarde.",
        showConfirmButton: false,
        icon: "error",
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass:{
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        }
      });
      
    });
  };

  return (
    <div className="contact-container">
     
   
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h2>Contáctanos</h2>
        <div className='container-div'>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input id="name" {...register('name')} />
          </div>
          <div className='div-error'>
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>       
        </div>

        <div className='container-div'>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" {...register('email')} />
          </div>
          <div className='div-error'>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>  
        </div>

        <div className='container-div'>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" {...register('phone')} />
          </div>
          <div className='div-error'>
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
        </div>

        <div className='container-div'>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" {...register('message')} />
          </div>
          <div className='div-error'>
          {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>
        </div>


        <button type="submit">Enviar Mensaje</button>
      </form>

      { !isMobile &&  
      <div className="contact-banner">
        <img src={banner1} alt="Banner" /> {/* Reemplaza con la URL de tu imagen */}
      </div>}
     
    </div>
  );
};

export default ContactForm;
