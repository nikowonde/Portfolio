import React from 'react';
import {Link} from 'react-router-dom';
import HeadCSS from './header.module.css';

const Header = () => {
    return (
        <div className={HeadCSS.header}>
            <Link to='cat' className={HeadCSS.link}>CATS</Link>
            <Link to='dog' className={HeadCSS.link}>DOGS</Link>
            <Link to='fox' className={HeadCSS.link}>FOXES</Link>
        </div>
    )
}

export default Header;