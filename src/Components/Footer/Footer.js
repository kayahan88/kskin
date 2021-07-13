import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='columns'>
                <section>
                    <h1>Contact Us</h1>
                    <p>k-skin 608 Not Real, Gangnam, Seoul, Republic of Korea</p>
                    <p>Phone: 02-213-3456</p>
                    <p>Monday - Friday: 10:00am to 5:00pm (KST)</p>
                    <p>Saturday - Sunday: Closed</p>
                    <p>Customer Service: support@kskin.co.kr</p>
                    <h1>k-skin</h1>
                    <div>socials</div>
                </section>
                <section className='footer-links'>
                    <h1>Policies</h1>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Return Policy</p>
                </section>
                <section className='footer-links'>
                    <h1>Product</h1>
                    <p>About Us</p>
                    <p><Link to='/FAQ'>FAQ</Link></p>
                    <p>Store Locations Worldwide</p>
                </section>
            </div>

            <div className='bottom-footer'>
                <p>k-skin® 2021</p>
            </div>

        </div>
    )
}
export default Footer;