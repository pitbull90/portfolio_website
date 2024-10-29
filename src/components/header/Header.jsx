import React, { useEffect, useState } from 'react'
import { links } from '../../Data';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

  return (
    <header className="header">
        <nav className="nav">
            <a href="" className="nav__logo text-cs">Henry</a>

            <div className={`${showMenu ? 'nav__menu show_menu' : 'nav__menu'}`}>
                <div className="nav__data">
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <li key={index} className="nav__item">
                                    <Link
                                        className='nav__link text-cs'
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className='header__socials'>
                        <a href='' className='header__social-link'>
                            <FaFacebook />
                        </a>
                        <a href='' className='header__social-link'>
                            <FaInstagram />
                        </a>
                        <a href='' className='header__social-link'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="nav__btns">
                <div className="theme__toggler">
                    <BsSun />
                </div>

                <div className={`${showMenu ? 'nav__toggle animate_toggle' : 'nav__toggle '}`} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header