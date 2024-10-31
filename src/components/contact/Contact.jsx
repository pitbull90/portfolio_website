import React from 'react'
import { useState } from 'react';
import axios, { formToJSON } from 'axios';
import './contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
// require('dotenv').config()
import ('dotenv')

const emailAPI = import.meta.env.VITE_CONTACT_FORM_API

function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '', 
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      `https://api.sheetbest.com/sheets/${emailAPI}`, 
      form
    )
    .then(
      (response) => {
        console.log(response)
        // clearing form fields
        setForm({ name: '', email: '', subject: '', message: '' })
      }
    )
  }

  return (
    <section className="contact section" id="contact">
        <h2 className='section__title text-cs'>Contact Me</h2>
        <p className='section__subtitle'>Let's <span>Talk About Ideas</span></p>

        <div className="contact__container container grid">
          <div className="contact__content">

              <div className="contact__card">
                <span className="contact__card_icon">
                  <FaRegMap />
                </span>

                <h3 className="contact__card_title">Address</h3>
                <p className="contact__card_data">Peoria, Arizona, USA</p>
              </div>

              <div className="contact__card">
                <span className="contact__card_icon">
                  <FaRegUser />
                </span>

                <h3 className="contact__card_title">Freelance</h3>
                <p className="contact__card_data">Available Right Now</p>
              </div>

              <div className="contact__card">
                <span className="contact__card_icon">
                  <FaRegEnvelope />
                </span>

                <h3 className="contact__card_title">Email</h3>
                <p className="contact__card_data">henrycordero2007@gmail.com</p>
              </div>

              <div className="contact__card">
                <span className="contact__card_icon">
                  <FaRegAddressBook />
                </span>

                <h3 className="contact__card_title">Phone</h3>
                <p className="contact__card_data">(770) 743-2769</p>
              </div>

          </div>
          

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form_group grid">
              <div className="contact__form_div">
                <label htmlFor="" className="contact__form_tag text-cs">Your Full Name <b>*</b></label>
                <input 
                type="text" 
                name='name' 
                onChange={handleChange}
                value={form.name} 
                className="contact__form_input" 
                />
              </div>

              <div className="contact__form_div">
                <label htmlFor="" className="contact__form_tag text-cs">Your Email Address <b>*</b></label>
                <input 
                type="email" 
                name='email' 
                onChange={handleChange}
                value={form.email}
                className="contact__form_input" 
                />
              </div>
            </div>

            <div className="contact__form_div">
                <label htmlFor="" className="contact__form_tag text-cs">Your Subject<b>*</b></label>
                <input 
                type="text" 
                name='subject' 
                onChange={handleChange}
                value={form.subject}
                className="contact__form_input" 
                />
            </div>

            <div className="contact__form_div contact__form_area">
                <label htmlFor="" className="contact__form_tag text-cs">Your Message <b>*</b></label>
                <textarea 
                name='message' 
                onChange={handleChange}
                value={form.message}
                className='contact__form_input'
                ></textarea>
            </div>

            <div className="contact__submit">
              <p>* Accept the terms and conditions.</p>
              <button type='submit' className='btn text-cs'>Send Message</button>
            </div>
          </form>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className='shape' />
        </div>
    </section>
  )
}

export default Contact