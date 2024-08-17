import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.svg';
import open from '../assets/menu_open.svg'
import close from '../assets/menu_close.svg'
function Navbar() {
    const [name, setName] = useState('');
    const menuRef = useRef()
    const openMenu = () => {
        menuRef.current.style.right = '0px'
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-250px'
        console.log(111);
    }

    const handleClick = (param) => () => {
        setName(param);
        menuRef.current.style.right = '-250px'
    };

    return (
        <div>
            <div className="navbar">
                <img src={logo} alt="Logo" />
                <div className='navbar-title'>{name}</div>
                <img src={open} onClick={openMenu} className='navbar-open' alt="" />
                <ul ref={menuRef} className='navbar-ul'>
                    <img src={close} onClick={closeMenu} className='navbar-close ' alt="" />
                    <li className='navbar-li'>
                        <Link
                            className={`navbar-link ${name === 'Home' ? 'wesehe' : ''}`} to="/" onClick={handleClick('Home')}>Home
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link
                            className={`navbar-link ${name === 'About Me' ? 'wesehe' : ''}`} to="/about" onClick={handleClick('About Me')}>About Me</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link
                            className={`navbar-link ${name === 'Services' ? 'wesehe' : ''}`} to="/services" onClick={handleClick('Services')}>Services</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link
                            className={`navbar-link ${name === 'Portfolio' ? 'wesehe' : ''}`} to="/portfolio" onClick={handleClick('Portfolio')}> Portfolio
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link
                            className={`navbar-link ${name === 'Contact' ? 'wesehe' : ''}`} to="/contact" onClick={handleClick('Contact')}>Contact
                        </Link>
                    </li>
                </ul>
                <div className="navbar-connect">Connect With Me</div> 
            </div>
        </div >
    );
}

export default Navbar;
