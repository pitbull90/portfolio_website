import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" ">
        <div className="footer__container container grid">
            <div className='footer__socials'>
                <a href='' className='footer__social-link'>
                <FaFacebook />
                </a>
                <a href='' className='footer__social-link'>
                <FaInstagram />
                </a>
                <a href='' className='footer__social-link'>
                <FaGithub />
                </a>
            </div>

            <p className="footer__copyright text-cs">&copy; 2024 <span>Luique</span>. All Rights Reserved</p>

            <p className="footer__copyright text-cs">Developed by <span>Henry Cordero</span></p>
        </div>
    </footer>
  )
}

export default Footer