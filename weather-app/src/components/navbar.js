import React from 'react';
import NavbarCSS from './navbar.module.css';

const Navbar = () => {
    return (
        <div>
           <nav className={NavbarCSS.nav}>
            <ul>
                <a href='/' className={NavbarCSS.element}>Homepage</a>
                <a href='/2ndPage' className={NavbarCSS.element}>secondPage</a>
                <a href='/3rdPage' className={NavbarCSS.element}>thirdPage</a>
            </ul>
          </nav>
        </div>
    )
}

export default Navbar;