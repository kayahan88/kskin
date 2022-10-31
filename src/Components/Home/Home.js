import React from 'react';
import {Link} from 'react-router-dom';
import '../Home/Home.scss'
import '../Home/HomeSmallest.css';
import genericbottle from '../../assets/genericbottle.jpg';
import homePhoto from '../../assets/glob.jpg';
import arrow from '../../assets/arrow.png';


const Home = () => {
    return (
        <div className='home'>
            <div className="row homePage">
                <img className='home-image' src={homePhoto} alt=""/>
                <div className="col-md-7"></div>
                <div className="col-md-4 ctaHome1">
                    <div>Korean skincare made with only the best formulations and absolutely zero fragrances.</div>
                    <Link className="ctaButton ctaButtonShopAll">SHOP ALL PRODUCTS</Link>
                </div>
            </div>

            <div id="myModal" className='modal'>
                <div className='modal-content'>
                    <p>Want to save 10% on your first order?</p>
                </div>
            </div>


        </div>
    )
}
export default Home;