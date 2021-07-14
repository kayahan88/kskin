import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <div className='nav'>
            <section className='section-1'>
                <p>the #1 selling skincare in korea</p>
            </section>
            <div className='spacer-1'></div>
            <h2 className='logo'><Link to='/'>k-skin</Link></h2>
            <div className='spacer-2'></div>
            <section className='nav-links'>
                <Link to='/Shop'>SHOP</Link>
                <Link to='/FAQ'>FAQ</Link>
                <Link to='/ACCOUNT'>ACCOUNT</Link>
                <Link to='/CART'>CART</Link>
            </section>
            <section className='hamburger'>
                <div>-</div>
                <div>-</div>
                <div>-</div>
            </section>
        </div>
    )
}
export default Nav;