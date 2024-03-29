import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import './NavSmallest.css';

const Nav = () => {
    const [dropdown, setDropdown] = useState('hide');

    const toggleDropdown = () => {
        if(dropdown === 'hide'){
            setDropdown('show')
        } else {
            setDropdown('hide')
        }
    };

    return(
        <div className='nav'>
            <section className='section-1'>
                <p>The #1 selling skincare in Korea</p>
            </section>
            <div className='spacer-1'></div>
            <h2 className='logo'><Link to='/'>k-skin</Link></h2>
            <div className='spacer-2'></div>
            <section className={dropdown === 'show' ? 'nav-links-mobile' : 'nav-links-web'}>
                <Link to='/Shop'>SHOP</Link>
                <Link to='/FAQ'>FAQ</Link>
                <Link to='/ACCOUNT'>ACCOUNT</Link>
                <Link to='/CART'>CART</Link>
            </section>
            <section className='hamburger' onClick={() => toggleDropdown()}>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </div>
    )
}
export default Nav;