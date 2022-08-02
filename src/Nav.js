import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />

            <img className='nav__avatar' src="https://pbs.twing.com/profile_images/" alt="" />
        </div>

    )
}

export default Nav