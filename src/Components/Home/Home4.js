import React from 'react';
import './Home.scss';
import blue from '../../assets/blue.jpg';
import Footer from '../Footer/Footer';

const Home4 = () => {
    return(
        <div className='home4'>
            <img className='home4-image' src={blue} alt=""/>
            <div className='ctaHome4 col-md-12'>Something here about how you need to buy something now. </div>
        </div>
    )
}
export default Home4;