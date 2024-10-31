import React, { useEffect, useState } from 'react'
import { links } from '../../Data';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

const getStorageTheme = () => {
    let theme = 'light_theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
}

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ scrollNav, setScrollNav ] = useState(false);
    const [ theme, setTheme ] = useState(getStorageTheme());

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    const toggleTheme = () => {
        if (theme === 'light_theme') {
            setTheme('dark_theme')
        } else {
            setTheme('light_theme')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

  return (
    <header className={`${scrollNav ? 'scroll_header' : ''} header`}>
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className="nav__logo text-cs">Henry</Link>

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
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-150}
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
                <div className="theme__toggler" onClick={toggleTheme}>
                    { theme === 'light_theme' ? <BsMoon /> : <BsSun /> }
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