import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// icons (https://react-icons.github.io/react-icons/)
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';

import { links } from '../../data';
import Logo from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link 
                    to='/' 
                    className='logo'
                    onClick={() => setIsNavShowing(false)}>
                        <img src={Logo} alt='Nav logo' />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'} `}>
                    {
                        links.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink 
                                        to={path} 
                                        className={({isActive}) => isActive ? 'active-nav' : ''}
                                        onClick={() => setIsNavShowing(prev => !prev)}
                                            >{name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button 
                    className="nav__toggle-btn" 
                    onClick={() => setIsNavShowing(prev => !prev)}>
                        {isNavShowing ? <MdOutlineClose/> : <HiOutlineBars3BottomRight />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;