import profileImg from '../../assets/henry_cordero_profile_picture.png';
// import shapeOne from '../../assets/shape-1.png';
// import shapeTwo from '../../assets/shape-2.png';

import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <p className='home__subtitle text-cs'>Hello, <span>My Name is</span></p>
        <h1 className='home__title text-cs'><span>Henry</span> Cordero</h1>
        <p className='home__job'><span className='text-cs'>I Am</span> <b>Web Developer</b></p>
        <div className='home__img_wrapper'>
          <div className='home__banner'>
            <img className='home__profile' src={profileImg} alt='' />
          </div>
            <p className="home__data home__data_one">
              <span className="text_lg">
                8 <b>+</b>
              </span>

              <span className="text_sm text-cs">
                Years of <b>Experience</b>
              </span>
            </p>

            <p className="home__data home__data_two">
              <span className="text_lg">
                320
              </span>

              <span className="text_sm text-cs">
                Completed <b>Projects</b>
              </span>
            </p>
        </div>
        <p className='home__text'>From Phoenix, Arizona. I have reach eperience in web design, also I am good at WordPress. I love to talk with you about our unique</p>

        <div className='home__socials'>
          <a href='' className='home__social-link'>
            <FaFacebook />
          </a>
          <a href='' className='home__social-link'>
            <FaInstagram />
          </a>
          <a href='' className='home__social-link'>
            <FaGithub />
          </a>
      </div>

      <div className='home__btns'>
        <a href='' className='btn text-cs'>DownLoad CV</a>
        <a href='' className='hero__link text-cs'>My Skills</a>
      </div>
      </div>
    </section>
  )
}

export default Home
