import React from 'react';
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
                    <button>Shop All Products</button>
                </div>
            </div>







            {/* <section className='text-box-k-skin'>
                <h1 className='text-box'>Korean skincare made with only the best formulations and absolutely zero fragrances.</h1>
                <h1 className='k-skin' >k-skin</h1>
                {/* <img className='arrow' src={arrow} /> */}
                {/* <button className='button' >What is Korean skincare?</button> */}
            {/* </section> */}
            {/* <img className='sparkles' src={sparkles} /> */}
            {/* <Home2 /> */}

            <div id="myModal" className='modal'>
                <div className='modal-content'>
                    <p>Want to save 10% on your first order?</p>
                </div>
            </div>


        </div>
    )
}
export default Home;