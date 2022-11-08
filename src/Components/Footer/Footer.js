import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
    return(
        <div className='footer container'>
            <div className='columns row'>
                <div className="col-12 col-md-4 footerSection">
                    <h3>Contact Us</h3>
                    <div>k-skin 608 Not Real, Gangnam, Seoul, Republic of Korea</div>
                    <div>Phone: 02-213-3456</div>
                    <div>Monday - Friday: 10:00am to 5:00pm (KST)</div>
                    <div>Saturday - Sunday: Closed</div>
                    <div>Customer Service: support@kskin.co.kr</div>
                    <div>socials</div>
                </div>
                <div className='col-12 col-md-4 footerLinks footerSection'>
                    <h3>Policies</h3>
                    <div><Link to='/TermsOfService'>Terms of Service</Link></div>
                    <div><Link to='/PrivacyPolicy'>Privacy Policy</Link></div>
                    <div><Link to='/ShippingPolicy'>Shipping Policy</Link></div>
                    <div><Link to='/ReturnPolicy'>Return Policy</Link></div>
                </div>
                <div className='col-12 col-md-4 footerLinks footerSection'>
                    <h3>Product</h3>
                    <div><Link to='/AboutUs'>About Us</Link></div>
                    <div><Link to='/FAQ'>FAQ</Link></div>
                    <div><Link to='/StoreLocations'>Store Locations Worldwide</Link></div>
                </div>
            </div>

            <div className='bottom-footer'>
                <p>k-skin® 2022</p>
            </div>

        </div>
    )
}
export default Footer;