import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import './blog.css';

function Blog() {
  return (
    <section className="blog section" id="id">
        <h2 className='section__title text-cs'>Latest Blogs</h2>
        <p className='section__subtitle'>My <span>Articles and Advice</span></p>

        <div className="blog__container container grid">
            <div className="blog__item card card_two">
                <span className="blog__date text-cs">OCTOBER 19 , 2024</span>
                <h3 className="blog__title">The Main Thing For The Designer</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>

                <a href="" className="link">
                Read more
                <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card_two">
                <span className="blog__date text-cs">OCTOBER 19 , 2024</span>
                <h3 className="blog__title">Follow Your Own Design Process</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>

                <a href="" className="link">
                Read more
                <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card_two">
                <span className="blog__date text-cs">OCTOBER 19 , 2024</span>
                <h3 className="blog__title">Usability Secrets to Create Better Interfaces</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>

                <a href="" className="link">
                Read more
                <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>

        <div className="section__deco deco__right">
          <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg_wrapper">
          <span className="bg__title">Blog</span>
        </div>
    </section>
  )
}

export default Blog