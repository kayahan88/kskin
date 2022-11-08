import React from 'react';
import './Home.scss';
import blue from '../../assets/blue.jpg';
import Footer from '../Footer/Footer';

const Home4 = () => {
    return(
        <div className='home4'>
            <img className='home4-image' src={blue} alt=""/>
            <div className='ctaHome4'> 
                <div className="ctaHome4Text">What is Korean skincare?</div>
                <button className="ctaHome4Button">LEARN MORE</button>
             </div>

        </div>
    )
}
export default Home4;