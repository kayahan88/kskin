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
                    <p><Link to='/TermsOfService'>Terms of Service</Link></p>
                    <p><Link to='/PrivacyPolicy'>Privacy Policy</Link></p>
                    <p><Link to='/ShippingPolicy'>Shipping Policy</Link></p>
                    <p><Link to='/ReturnPolicy'>Return Policy</Link></p>
                </section>
                <section className='footer-links'>
                    <h1>Product</h1>
                    <p><Link to='/AboutUs'>About Us</Link></p>
                    <p><Link to='/FAQ'>FAQ</Link></p>
                    <p><Link to='/StoreLocations'>Store Locations Worldwide</Link></p>
                </section>
            </div>

            <div className='bottom-footer'>
                <p>k-skin® 2022</p>
            </div>

        </div>
    )
}
export default Footer;